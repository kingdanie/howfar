import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BriefcaseIcon, CheckIcon, CreditCardIcon, MagnifyingGlassIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function TransferModal({open, toggle } : {open: boolean, toggle: () => void}) {


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={()=> toggle()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
              
                    <div className='flex items-center justify-between'>

                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                     Transfer Points
                    </Dialog.Title>
                    <div onClick={()=> toggle()} className="flex h-12 w-12 items-center justify-center cursor-pointer">
                    <XMarkIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                  </div>
                    {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div> */}
                    </div>
                  <div className="text-center">
                    <div className='space-y-4'>

                    <div className="relative mt-3 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <CreditCardIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        </div>
                        <input
                        type="number"
                        name="no_points"
                        id="no_points"
                        className="h-14 block min-w-full md:w-80 rounded-xl shadow-lg border pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Number of points"
                        />
                    </div>
                    <div className="relative mt-3 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <UserIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        </div>
                        <input
                        type="text"
                        name="username"
                        id="username"
                        className="h-14 block min-w-full md:w-80 rounded-xl shadow-lg border pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Username"
                        />
                    </div>
                    <div className="relative mt-3 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <BriefcaseIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        </div>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        className="h-14 block min-w-full md:w-80 rounded-xl shadow-lg border pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                        />
                    </div>
                    
                    </div>
                </div>
                </div>
                <div className="mt-4 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-xl border border-transparent bg-accent px-4 py-4 text-base font-medium text-gray-500 shadow-sm hover:bg-accent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:text-sm"
                    onClick={() => toggle()}
                  >
                   Complete transaction 
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
