import { useState } from 'react'
import { Tab } from '@headlessui/react'
import f from "../Assest/f.png";
import r from "../Assest/r.png";
import t from "../Assest/t.png";
import p from "../Assest/p.png";
import m from "../Assest/m.png";
import photo from "../Assest/photo.png";
import il from "../Assest/il.png";
import g from "../Assest/g.png";
import gg from "../Assest/gg.png";
import ff from "../Assest/ff.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Skills() {
  let [categories] = useState({
    Framework: [
      {
        id: 1,
        title: 'Flutter',
        date: '5h ago',
        col: f
      },
      {
        id: 2,
        title: "React js",
        date: '2h ago',
        col:r
      },
      {
        id: 3,
        title: "Tailwind CSS",
        date: '2h ago',
        col:t
      },
    
    ],

    Database: [
      {
        id: 1,
        title: "PostgreSQL",
        date: '2h ago',
        col:p
      },
      {
        id: 2,
        title: "MySQL",
        date: '2h ago',
        col:m
      },
      {
        id: 3,
        title: "Firebase",
        date: '2h ago',
        col:ff
      },
      
    ],

    Tools: [
      {
        id: 1,
        title: 'GitHub',
        date: 'Jan 7',
        col:g
      },
      {
        id: 2,
        title: 'Git',
        date: 'Mar 19',
        col:gg
      },
    ],

    Designer: [
      {
        id: 1,
        title: 'Photoshop',
        date: 'Jan 7',
        col:photo
      },
      {
        id: 2,
        title: 'illustrator',
        date: 'Mar 19',
        col:il
      },
    ],
  
  })

  

  return (
    <div className="bg-gray-900 h-screen">
      <div className="max-w-3xl mx-auto">
        <div>
        <section class="text-white font-bold bg-gray-900 body-font items-center justify-center">
<div class="px-5 py-11 flex flex-col">
    <p className='text-[7vh] text-center subpixel-antialiased font-lora underline'>My selection for the project</p>
<div className="w-full px-2 py-10 sm:px-0 justify-center">
<div className="-m-2 justify-center">
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

             <ul role="list" class="p-1 divide-y divide-slate-200">
              <li class="flex py-4 first:pt-0 last:pb-0">
              <img className="h-9 w-9" src={post.col} alt="" />
              <div class="ml-3 overflow-hidden">
              <h2 className="text-2xl font-medium leading-5 text-black hover:font-bold hover:text-gray-700">
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
