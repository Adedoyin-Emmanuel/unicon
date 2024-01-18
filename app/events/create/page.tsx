"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Layout from "@/app/components/Layout/Layout";
import Text from "@/app/components/Text/Text";
import Button from "@/app/components/Button/Button";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const CreateEvent = () => {
  let [isOpen, setIsOpen] = useState<boolean>(true);
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleNavigateToPhysicalEvent = () => {
    closeModal();
    router.push("/events/create/physical");
  };

  const handleNavigateToVirtualEvent = () => {
    closeModal();

    router.push("/events/create/virtual");
  };

  return (
    <Layout>
      <section className="w-full container">
        <div className="fixed inset-0 flex items-center justify-center">
          <Button onClick={openModal} className="w-44" border>
            select event type
          </Button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl capitalize leading-6 text-gray-900 font-bold my-3"
                    >
                      Select event type
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm">
                        Hello there! 🌟 To create your event, please choose the
                        event type: Virtual or Physical. What's your preference?
                      </p>
                    </div>

                    <div className=" flex items-center justify-between mt-4">
                      <Button
                        onClick={handleNavigateToPhysicalEvent}
                        className="w-24"
                      >
                        physical
                      </Button>
                      <Button
                        onClick={handleNavigateToVirtualEvent}
                        className="w-24"
                        border
                      >
                        virtual
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>
    </Layout>
  );
};

export default CreateEvent;
