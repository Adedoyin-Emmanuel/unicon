"use client";
import Button from "@/app/components/Button/Button";
import Loader from "@/app/components/Loader/Loader";
import Text from "@/app/components/Text/Text";
import toast from "react-hot-toast";
import Skeleton from "@/app/components/Skeleton/Skeleton";
import Modal from "@/app/components/Modal/Modal";
import Layout from "@/app/components/Layout/Layout";
import BackButton from "@/app/components/BackButton/BackButton";

import { CreateUploadflyClient } from "@uploadfly/js";
import chance from "chance";
import { useRef, useState } from "react";
export default function Profile() {
  //   const dispatch = useDispatch();

  //   const [uploadingImage, setUploadingImage] = useState<boolean>(false);
  //   const [isDialogOpen, setIsDialogOpen] = useState(false);
  //   const [selectedImage, setSelectedImage] = useState<File | null>(null);
  //   const [imageUrl, setImageUrl] = useState<string | null>(null);
  const modalRef = useRef<HTMLDialogElement | any>(null);
  //   const API_KEY = process.env.NEXT_PUBLIC_UPLOADFLY_API_KEY as string;
  //   const uploadFly = new CreateUploadflyClient(API_KEY);
  //   const chanceInstance = new chance();

  /**
   * @summary a fly is a file uploaded to uploadfly you get the vibe 😅
   */

  const showModal = () => {
    // if (modalRef && modalRef.current) {
    //   modalRef?.current.showModal();
    // }
  };

  const closeModal = () => {
    // if (modalRef && modalRef.current) {
    //   modalRef?.current.closeModal();
    //   handleCancel();
    // }
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    // const file = event.target.files?.[0];
    // if (file) {
    //   // Check if the file type is an image
    //   if (file.type.startsWith("image/")) {
    //     setIsDialogOpen(true);
    //     setSelectedImage(file);
    //     setImageUrl(file ? URL.createObjectURL(file) : null);
    //     showModal();
    //   } else {
    //     toast.error("Please select a valid image file");
    //   }
    // } else {
    //   toast.error("Please select an image");
  };

  const handleContinue = async () => {
    // setIsDialogOpen(false);
    // closeModal();
    // /**
    //  * @summary the flyName is the name of the file to be uploaded to uploadfly
    //  */
    // const flyName = chanceInstance.string({
    //   length: 20,
    //   casing: "lower",
    //   alpha: true,
    //   numeric: true,
    // });
    // try {
    //   setUploadingImage(true);
    //   const uploadFlyResponse = await uploadFly.upload(selectedImage as File, {
    //     filename: flyName,
    //   });
    //   if (uploadFlyResponse?.success) {
    //     const flyUrl = uploadFlyResponse?.data?.url;
    //     setUploadingImage(false);
    //     // This response is from my own API so no need to add agronomixResponse 😀
    //     const response = await updateBuyer({ profilePicture: flyUrl }).unwrap();
    //     if (response?.data) {
    //       toast.success("Profile picture updated");
    //       dispatch(updateAuthInfo(response?.data));
    //     }
    //     //this is what we're saving in the database
    //   }
    //   console.log(uploadFlyResponse);
    // } catch (error: any) {
    //   toast.error(error?.message);
    // }
  };

  const handleCancel = () => {
    // setSelectedImage(null);
    // setIsDialogOpen(false);
  };

  return (
    <Layout showInput={false}>
      <BackButton />
      <section className="appointments my-5">
        <section className="update-profile w-full my-8">
          <div className="image-section flex flex-col items-center justify-center">
            <div className="avatar cursor-pointer">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={"https://api.dicebear.com/7.x/micah/svg?seed=emmysoft"}
                  alt="user profile image"
                />
              </div>
            </div>

            <Modal ref={modalRef}>
              <section className="">
                <section
                  className="w-full flex items-center justify-center"
                  my-2
                >
                  {/* <img src={imageUrl!} className="w-60 h-60 rounded-full" /> */}
                </section>
                <section className="mt-8 w-full flex items-end justify-end">
                  <Button onClick={handleContinue}>Proceed</Button>
                </section>
              </section>
            </Modal>

            <form className="w-60" onChange={handleImageChange}>
              <label className="capitalize w-full my-5 text-white flex items-center justify-center hover:bg-accent cursor-pointer rounded p-3 bg-primary transition-all transform">
                <input
                  type="file"
                  id="productImage"
                  name="produtImages"
                  className=""
                  hidden
                  multiple
                />
                upload
              </label>{" "}
            </form>
          </div>
        </section>
      </section>
    </Layout>
  );
}
