import React from "react";
import { Transition } from "@headlessui/react";

const Modal = ({ isOpen, onClose }) => {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-300 transform"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <div className="fixed top-0 right-0 h-full w-full overflow-x-hidden">
        <div onClick={onClose} className="h-screen hidden md:block w-1/2 bg-black opacity-50 fixed top-0 left-0 z-40"></div>
        <div className="fixed top-0 right-0 h-auto lg:h-screen lg:w-1/2 w-full shadow-custom  z-50  bg-[#F4F5F7]">
          {/* Modal content */}
          {/* Replace this with your modal content */}
          <div className="pt-8 pl-5">
            <h1 className="text-xl font-bold">Add Product</h1>
            <p>Add your product and necessary information from here</p>
          </div>
          <div className="mt-8 h-[75%] overflow-y-scroll bg-white p-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eaque obcaecati odit laudantium quas nobis adipisci expedita ducimus nam
              modi quod deserunt dolorem tenetur unde, facilis commodi necessitatibus et quasi vitae assumenda fugiat. Repellat ratione earum porro
              dolorum consequatur molestiae, eligendi aliquid possimus dolores nisi tempore dolore pariatur saepe consectetur reprehenderit, vel dicta
              perferendis! At, necessitatibus praesentium reiciendis voluptatibus sunt, dolorum corrupti accusamus numquam provident labore fugit quod
              ab nisi quibusdam, placeat ea quisquam animi tempore doloribus? Itaque perspiciatis aperiam placeat at recusandae sunt exercitationem
              ipsum sequi illum, ullam iusto quibusdam vitae nemo voluptates ducimus molestias unde doloribus officiis aliquam repellat incidunt ipsam
              possimus dolorum. Molestias quis aspernatur labore ipsum? Nobis ab optio aperiam mollitia, cupiditate repellat repudiandae cumque
              assumenda quasi illo ea temporibus itaque iure nisi dolorem praesentium sed eum consequuntur provident id eos porro quisquam
              voluptatibus? Voluptas ducimus facilis laudantium modi recusandae labore nam praesentium, consequuntur laborum illo necessitatibus
              quaerat eligendi. Eveniet accusantium suscipit qui rerum! Quasi distinctio hic saepe! Dolorum voluptatem cumque at, tempora excepturi
              adipisci, veniam repudiandae nihil dolore itaque nemo commodi accusamus. Perspiciatis, illo facere blanditiis natus laudantium obcaecati
              eum id commodi accusantium quam unde harum quos animi, dolorum quas libero voluptatem itaque quaerat ipsa.
            </p>{" "}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eaque obcaecati odit laudantium quas nobis adipisci expedita ducimus nam
              modi quod deserunt dolorem tenetur unde, facilis commodi necessitatibus et quasi vitae assumenda fugiat. Repellat ratione earum porro
              dolorum consequatur molestiae, eligendi aliquid possimus dolores nisi tempore dolore pariatur saepe consectetur reprehenderit, vel dicta
              perferendis! At, necessitatibus praesentium reiciendis voluptatibus sunt, dolorum corrupti accusamus numquam provident labore fugit quod
              ab nisi quibusdam, placeat ea quisquam animi tempore doloribus? Itaque perspiciatis aperiam placeat at recusandae sunt exercitationem
              ipsum sequi illum, ullam iusto quibusdam vitae nemo voluptates ducimus molestias unde doloribus officiis aliquam repellat incidunt ipsam
              possimus dolorum. Molestias quis aspernatur labore ipsum? Nobis ab optio aperiam mollitia, cupiditate repellat repudiandae cumque
              assumenda quasi illo ea temporibus itaque iure nisi dolorem praesentium sed eum consequuntur provident id eos porro quisquam
              voluptatibus? Voluptas ducimus facilis laudantium modi recusandae labore nam praesentium, consequuntur laborum illo necessitatibus
              quaerat eligendi. Eveniet accusantium suscipit qui rerum! Quasi distinctio hic saepe! Dolorum voluptatem cumque at, tempora excepturi
              adipisci, veniam repudiandae nihil dolore itaque nemo commodi accusamus. Perspiciatis, illo facere blanditiis natus laudantium obcaecati
              eum id commodi accusantium quam unde harum quos animi, dolorum quas libero voluptatem itaque quaerat ipsa.
            </p>{" "}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eaque obcaecati odit laudantium quas nobis adipisci expedita ducimus nam
              modi quod deserunt dolorem tenetur unde, facilis commodi necessitatibus et quasi vitae assumenda fugiat. Repellat ratione earum porro
              dolorum consequatur molestiae, eligendi aliquid possimus dolores nisi tempore dolore pariatur saepe consectetur reprehenderit, vel dicta
              perferendis! At, necessitatibus praesentium reiciendis voluptatibus sunt, dolorum corrupti accusamus numquam provident labore fugit quod
              ab nisi quibusdam, placeat ea quisquam animi tempore doloribus? Itaque perspiciatis aperiam placeat at recusandae sunt exercitationem
              ipsum sequi illum, ullam iusto quibusdam vitae nemo voluptates ducimus molestias unde doloribus officiis aliquam repellat incidunt ipsam
              possimus dolorum. Molestias quis aspernatur labore ipsum? Nobis ab optio aperiam mollitia, cupiditate repellat repudiandae cumque
              assumenda quasi illo ea temporibus itaque iure nisi dolorem praesentium sed eum consequuntur provident id eos porro quisquam
              voluptatibus? Voluptas ducimus facilis laudantium modi recusandae labore nam praesentium, consequuntur laborum illo necessitatibus
              quaerat eligendi. Eveniet accusantium suscipit qui rerum! Quasi distinctio hic saepe! Dolorum voluptatem cumque at, tempora excepturi
              adipisci, veniam repudiandae nihil dolore itaque nemo commodi accusamus. Perspiciatis, illo facere blanditiis natus laudantium obcaecati
              eum id commodi accusantium quam unde harum quos animi, dolorum quas libero voluptatem itaque quaerat ipsa.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10 mx-2 lg:w-5/6 lg:mx-auto">
            <button onClick={onClose} className="bg-gray-200/80 text-error-400 w-full cursor-pointer py-3 border-none rounded-md font-medium">
              Cancel
            </button>{" "}
            <button className="bg-primary-600 text-white w-full cursor-pointer py-3 border-none rounded-md font-medium">Add Product</button>
          </div>
          <button
            className="absolute top-0 right-4 shadow-custom bg-white hover:bg-primary-200 rounded-[50%]  mt-4 bg-blue-500 text-black w-10 h-10"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 text-gray-600  h-5 inline-block"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  );
};

export default Modal;
