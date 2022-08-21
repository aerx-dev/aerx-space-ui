import React from "react";
import { Textarea } from "@chakra-ui/react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from 'yup';

const ProfileSettingForm: React.FC = () => {
    const initialValues = {
        name: "",
        userName: "",
        bio: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        userName: Yup.string().required("User name is required"),
        bio: Yup.string().required("Bio is required")
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            console.log(values)
        }
    });

    const { touched, values, getFieldProps, isValid, errors} = formik;

    const handleSubmit = () => {
        const dataToPost = {...values, image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"};
        alert('Data to post: ' + JSON.stringify(dataToPost));
    }
    return (
        <div className="px-6">
            <div className="mt-4 flex w-ful gap-6">
                <div className="h-[400px] w-[230px] bg-[#0000004d] p-2" style={{
                    backgroundImage: `url("/assets/images/profile-avatar-cover.svg")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "20px",
                    backgroundBlendMode: "overlay",
                }}>
                    <div className="flex flex-col justify-between h-[70%] text-sm pt-4">
                        <div className="flex justify-around">
                            <label className="text-white">Avatar</label>
                        </div>

                        <div className="w-full  flex flex-col justify-around">
                            <Image src="/assets/icons/upload-icon.svg" alt="profile-avatar" width={40} height={40} />
                            <label className="text-white text-center">Upload</label>
                        </div>

                        
                        <div className="w-full  flex flex-col justify-around">
                            <Image src="/assets/icons/3d-account-icon.svg" alt="profile-avatar" width={40} height={40} />
                            <label className="text-white text-center">3D avatar</label>
                        </div>
                    </div>
                </div>
                <div className="w-[55%] ">
                    <input 
                    type="text" 
                    placeholder="Full name" 
                    className="w-full text-sm  py-3 px-4 focus:outline-none bg-black rounded-md text-white"
                    {...getFieldProps("name")}
                    name="name"
                    style={touched.name && errors.name ? {borderColor: "red"} : {}}
                    />
                    <>
                    {touched.name && errors.name && <label className="text-red-500 text-sm">{errors?.name}</label> }
                    </>
                    <input 
                    type="text" 
                    placeholder="Username" 
                    className="mt-[1em] w-full text-sm  py-3 px-4 focus:outline-none bg-black rounded-md text-white"
                    {...getFieldProps("userName")}
                    name="userName"
                    style={touched.userName && errors.userName ? {borderColor: "red"} : {}}
                    />
                    <>
                    {touched.userName && errors.userName && <label className="text-red-500 text-sm">{errors?.userName}</label> }
                    </>

                    <Textarea placeholder="About" 
                    style={{
                        border: 0,
                        backgroundColor: 'black',
                        marginTop: '1em',
                        fontSize: '14px',
                        color: 'white',
                    }}
                    rows={14}
                    {...getFieldProps("bio")}
                    className={touched.bio && errors.bio ? "border-red-500" : ""}
                    name="bio"
                    />
                    <>
                    {touched.bio && errors.bio && <label className="text-red-500 text-sm">{errors?.bio}</label> }
                    </>
                </div>
            </div>
            <div className="w-full flex justify-around mt-4">
                <button 
                disabled={!isValid}
                onClick={handleSubmit}
                className="text-white bg-purple p-2 rounded-[10px] w-[200px]"
                style={isValid ? {opacity: 1} : {opacity: 0.5}}
                >
                    Create
                </button>
            </div>
        </div>
    );
}

export default ProfileSettingForm;