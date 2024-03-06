import { Bars3Icon, BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Header() {

    return (
        <header className="bg-white">
            <nav className="flex max-w-5xl mx-auto justify-between lg:py-2 py-6" aria-label="Global">
                <div className='flex flex-1 items-center space-x-4'>
                    <div className="flex pl-8 lg:pl-0">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image className="h-8 w-auto" src="/testvalley-logo.svg" alt="" height={8} width={8} />
                        </a>
                    </div>
                    <div className="hidden lg:inline-flex text-teal-400 items-center">
                        <Bars3Icon className='w-6 h-6' />
                        <span>카테고리</span>
                    </div>
                </div>

                <div className="hidden lg:flex flex-1 items-center justify-end">
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-0 py-2.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-teal-400 sm:text-sm sm:leading-6"
                            placeholder="살까말까 고민된다면 검색해보세요!"
                        />
                    </div>
                </div>
                <div className='lg:hidden flex gap-x-8 pr-4'>
                    <BellIcon className="w-10 h-10 text-gray-600 font-bold block" />
                    <MagnifyingGlassIcon className="w-10 h-10 text-gray-600 font-bold block" />

                </div>
                <div className="hidden lg:flex flex-1 justify-end items-center space-x-2 divide-x">
                    <Image src="/home-event.svg" alt="" className='' width={18} height={12} />
                    <button className='pl-2'>로그인 / 회원가입</button>
                </div>
            </nav>
        </header>
    )
}
