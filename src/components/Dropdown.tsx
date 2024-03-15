import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { filterItems, markAllCompleted } from '../redux/actions';

export default function Dropdown() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: any) => state?.filter);

  const handleFilter = (filterItem: string) => {
    dispatch(filterItems(filterItem));
  }
  return (
    <>
      <div className="relative text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button 
            className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            value={currentFilter}
            onChange={(e: any) => handleFilter(e.target?.value)}
          >
            {currentFilter.toLowerCase()}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-teal-100 hover:text-teal-50"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-teal-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    value={'ALL'}
                    onClick={(e: any) => handleFilter(e.target?.value)}
                  >
                    All
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-teal-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    value={'COMPLETED'}
                    onClick={(e: any) => handleFilter(e.target?.value)}
                  >
                    Completed
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-yellow-300 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    value={'INCOMPLETED'}
                    onClick={(e: any) => handleFilter(e.target?.value)}
                  >
                    Incompleted
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>

    <div>
      <button 
        className={'border-none bg-slate-200 pl-4 pr-4 pt-3 pb-3 uppercase text-sm rounded-md text-slate-800 '}
        onClick={() => dispatch(markAllCompleted())}
      >Mark All as completed</button>
    </div>
    </>
    
  )
}
