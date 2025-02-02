import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { updateProfile } from "../../../../services/operations/SettingsAPI"
import { branches } from "./EditProfile";

export default function EditProfessional() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitProfileForm = async (data) => {
    try {
      dispatch(updateProfile(token, data))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <>  
      <form 
        className={`${user.accountType === "Student" ? "block" : "hidden"}`} 
        onSubmit={handleSubmit(submitProfileForm)}
      >
        {/* Profile Information */}
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Professional Details
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="semester" className="lable-style">
                Semester<sup className="text-pink-600">*</sup>
              </label>
              <input
                type="text"
                name="semester"
                id="semester"
                placeholder="Enter semester"
                className="form-style"
                {...register("semester", { required: true })}
                defaultValue={user?.additionalDetails?.sem}
              />
              {errors.semester && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your semester marks.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="portfolio" className="lable-style">
                Portfolio Website
              </label>
              <input
                type="text"
                name="portfolio"
                id="portfolio"
                placeholder="Enter portfolio link"
                className="form-style"
                {...register("portfolio")}
                defaultValue={user?.additionalDetails?.website}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="branch" className="lable-style">
                Branch<sup className="text-pink-600">*</sup>
              </label>
              <select
                  type="text"
                  name="branch"
                  id="branch"
                  placeholder="Choose your branch"
                  className="form-style"
                  {...register("branch", { required: true })}
                  defaultValue={user?.additionalDetails?.brch}
                >
                  {branches.map((ele, i) => (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  ))}
              </select>
              {errors.branch && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your branch.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="rollNo" className="lable-style">
                Roll Number<sup className="text-pink-600">*</sup>
              </label>
              <input
                type="text"
                name="rollNo"
                id="rollNo"
                placeholder="Enter Roll Number"
                className="form-style"
                {...register("rollNo", { required: true })}
                defaultValue={user?.additionalDetails?.rollNo}
              />
              {errors.rollNo && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Roll Number.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="cgpa" className="lable-style">
                CGPA<sup className="text-pink-600">*</sup>
              </label>
              <input
                type="text"
                name="cgpa"
                id="cgpa"
                placeholder="Enter CGPA"
                className="form-style"
                {...register("cgpa", { required: true })}
                defaultValue={user?.additionalDetails?.cgpa}
              />
              {errors.cgpa && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your cgpa.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="github" className="lable-style">
                Github<sup className="text-pink-600">*</sup>
              </label>
              <input
                type="text"
                name="github"
                id="github"
                placeholder="Enter github link"
                className="form-style"
                {...register("github", { required: true })}
                defaultValue={user?.additionalDetails?.github}
              />
              {errors.github && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your github link.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="backlogs" className="lable-style">
                Backlogs<sup className="text-pink-600">*</sup>
              </label>
              <input
                type="text"
                name="backlogs"
                id="backlogs"
                placeholder="Enter backlogs"
                className="form-style"
                {...register("backlogs", { required: true })}
                defaultValue={user?.additionalDetails?.bklgs}
              />
              {errors.backlogs && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter backlogs.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="linkedIn" className="lable-style">
                LinkedIn<sup className="text-pink-600">*</sup>
              </label>
              <input
                type="text"
                name="linkedIn"
                id="linkedIn"
                placeholder="Enter linkedIn link"
                className="form-style"
                {...register("linkedIn", { required: true })}
                defaultValue={user?.additionalDetails?.linkedin}
              />
              {errors.linkedIn && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your linkedIn link.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="leetcode" className="lable-style">
                Leetcode
              </label>
              <input
                type="text"
                name="leetcode"
                id="leetcode"
                placeholder="Enter your leetcode link"
                className="form-style"
                {...register("leetcode")}
                defaultValue={user?.additionalDetails?.leetcode}
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="codechef" className="lable-style">
                Codechef
              </label>
              <input
                type="text"
                name="codechef"
                id="codechef"
                placeholder="Enter codechef link"
                className="form-style"
                {...register("codechef")}
                defaultValue={user?.additionalDetails?.codechef}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="stackOverflow" className="lable-style">
                Stack Overflow
              </label>
              <input
                type="text"
                name="stackOverflow"
                id="stackOverflow"
                placeholder="Enter stack overflow link"
                className="form-style"
                {...register("stackOverflow")}
                defaultValue={user?.additionalDetails?.stkoflw}
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="resume" className="lable-style">
                Resume<sup className="text-pink-600">*</sup>
              </label>
              <input
                type="text"
                name="resume"
                id="resume"
                placeholder="Upload your resume"
                className="form-style"
                {...register("resume", { required: true })}
                defaultValue={user?.additionalDetails?.resume}
              />
              {errors.resume && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please upload your resume.
                </span>
              )}
            </div>
          </div>

        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile")
            }}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50 transition-all duration-200 hover:scale-95"
          >
            Cancel
          </button>
          <button type="submit" className="border cursor-pointer rounded-md py-2 px-5 font-semibold hover:bg-richblack-700 hover:text-richblack-50 transition-all duration-200 hover:scale-95 border-richblack-700">Save</button>
        </div>
      </form>
    </>
  )
}
