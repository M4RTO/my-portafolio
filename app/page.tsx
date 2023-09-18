'use client'


import { Image } from "@nextui-org/image";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

import { useEffect } from 'react';


export default function Home() {

  ScrollTrigger.defaults({
    toggleActions: "none none none none"
  });
    

  gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

  useEffect(() => {
    const components = document.querySelectorAll('#component')
    const container: HTMLElement = document.querySelector('#container')!

    gsap.to(components, {
      xPercent: -100 * (components.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (components.length - 1),
        end: () => "+=" + container.offsetWidth
      }
    })
  }, [])


  return (
    <>

      <div id="container" style={{ display: 'flex', width: '500vw' }}>

          <div className="flex justify-evenly items-center flex-row" id="component">
            <div className="basis-1/4">
              <Image src="/profile-pic.png" width={300} height={300}/>
            </div>
            <div className="basis-1/2">
              <h1>Lorem ipsum dolor sit amet</h1>
              <br />
              <p>Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non tellus orci ac.</p>
            </div>
          </div>

         

          <div className="flex justify-evenly items-center flex-row" id="component">
            <div className="basis-1/4">
              <Image src="/profile-pic.png" width={300} height={300}/>
            </div>
            <div className="basis-1/2">
              <h1>Lorem ipsum dolor sit amet</h1>
              <br />
              <p>Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non tellus orci ac.</p>
            </div>
          </div>

        </div>
      {/* </div> */}
    </>
    // <div className="flex justify-center pt-6">
    //   <div className="flex-auto w-60">
    //     <Image src="/profile-pic.png" width={500} height={500}></Image>
    //   </div>
    //   <div className="flex-auto w-40">
    //     <h1>Lorem ipsum dolor sit amet</h1>
    //     <br />
    //     <p>Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non tellus orci ac.</p>
    //   </div>
    // </div>
  )
}
