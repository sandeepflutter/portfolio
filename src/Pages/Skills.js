import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { FaTwitter } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Skills() {
  let [categories] = useState({
    Developer: [
      {
        id: 1,
        title: 'Flutter',
        date: '5h ago',
      },
      {
        id: 2,
        title: "React js",
        date: '2h ago',
      },
      {
        id: 3,
        title: "Tailwind CSS",
        date: '2h ago',
      },
      {
        id: 4,
        title: "SQL( PostgreSQL and MySQL)",
        date: '2h ago',
      },
      {
        id: 5,
        title: "SQL( PostgreSQL and MySQL)",
        date: '2h ago',
      },
    ],
    Designer: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
      },
    ],
    Tutor: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
      },
    ],
  })

  return (
    <div className="mx-auto bg-gray-900">
      <div className="max-w-xl mx-auto">
        <div>
        <section class="text-gray-400 bg-gray-900 body-font items-center justify-cente ">
<div class="container px-5 py-15 mx-auto flex flex-col">
    <p className='text-[8vh] text-center'>Skills</p>
<div className="w-full px-2 py-16 sm:px-0 justify-center">
<div className=" -m-2 justify-center">
<Tab.Group>
<Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
  {Object.keys(categories).map((category) => (
    <Tab
      key={category}
      className={({ selected }) =>
        classNames(
          'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
          'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          selected
            ? 'bg-white shadow'
            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
        )
      }
    >
      {category}
    </Tab>
  ))}
</Tab.List>
<Tab.Panels className="mt-2">
  {Object.values(categories).map((posts, idx) => (
    <Tab.Panel
      key={idx}
      className={classNames(
        'rounded-xl bg-white p-3',
        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
      )}
    >

      
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className="relative rounded-md p-3 hover:bg-gray-100"
          >

             <ul role="list" class="p-2 divide-y divide-slate-200">
              <li class="flex py-4 first:pt-0 last:pb-0">
              <FaTwitter class="h-10 w-10"/>
              <div class="ml-3 overflow-hidden">
              <h2 className="text-xl font-medium leading-5">
              {post.title}
            </h2>
      </div>
    </li>
</ul>
           
          </li>
        ))}
      </ul>
    </Tab.Panel>
  ))}
</Tab.Panels>
</Tab.Group>
</div>
</div>
</div>
</section>
        </div>
      </div>
    </div>
   
  )
}
