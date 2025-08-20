<template>


 <div class="text-[rgb(var(--text-primary))]">
    
  



<div class="bg-cover bg-center" style="background-image: url('https://images7.alphacoders.com/862/thumb-1920-862931.jpg');">

    <header class="absolute inset-x-0 top-0 z-50">
     
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
     
            <div class="flex lg:flex-1">
         
                <a href="#" class="-m-1.5 p-1.5  max-sm:hidden ">
            <span class="sr-only">Your Company</span>
            <img  src="https://cdn.mobygames.com/covers/3693967-mobile-strike-android-front-cover.png " class="lg:hover:border-yellow-500  lg:border-0 lg:hover:border-4 transition duration-1000   border  lg:hover:scale-105 transform"  width="100" height="100" alt="" />
          </a>

        </div>


        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>



        <div class="hidden lg:flex lg:gap-x-12 ">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm/6 lg:text-xl lg:hover:text-red-500 lg:hover:bg-black
           lg:hover:rounded lg:p-2
          font-semibold text-yellow-500">{{ item.name }}</a>
        </div>

        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm/6 font-semibold text-white hover:text-red-500 lg:text-2xl">You have an Account?  / Log in Now!<span aria-hidden="true">&rarr;</span></a>
        </div>

      </nav>


      <!--Burası mobil görünüm için -->

      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
       
        <div class="fixed inset-0 z-50" />
       
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" />
            </a>
           
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-200" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">


            <div class="-my-6 divide-y divide-white/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">{{ item.name }}</a>
              </div>

              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5">Log in</a>

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>






    <div class="relative isolate px-6 pt-14 lg:px-8">
   
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>




      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        

        <div class="text-center">
       
            <p class="text-5xl font-semibold tracking-tight text-balance text-yellow-500 sm:text-7xl lg:text-9xl">Join Us İn Battle</p>
        
          <p class="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8 lg:text-4xl ">20th Centuries Best Mobile MMORPG Game</p>

          <div class="mt-10 flex items-center  justify-center gap-x-3">
            
       
            <a href=""     class="bg-black rounded flex justify-evenly gap-1 text-white font-semibold lg:hover:border-2 border-white   p-5  transform duration-400" >
        
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-google-play text-white" viewBox="0 0 16 16">
  <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
</svg>
            <p class="pt-2"> Google Play Store</p>    </a>
             

            <a href="#" style="width: 200px; height: 72px;" class=" mx-auto  px-2 py-2  bg-black rounded flex justify-evenly gap-1 text-white font-semibold lg:hover:border-2 border-white  m-3 transform duration-400">    <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-apple ps-2" viewBox="0 0 16 16">
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
</svg>   <p class="pt-2 pe-2.5"> App store</p> </a>


            <a href="#" class="text-sm/6 font-semibold text-white">Details <span aria-hidden="true">→</span></a>

          </div>
        </div>
      </div>


      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </div>








 
   
 <div class="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900  "> 
<div class="flex justify-center items-center mx-auto border-4 border-yellow-500"">
  <h2 class="text-yellow-600   mx-auto  sm:text-2xl  lg:text-7xl  font-bold " >WARZONE AWAİTS</h2>
</div>
  <div class="container-fluid">

    <div class="grid grid-cols-2 mx-auto">
    

     
      <div class="   border-2 border-yellow-500  sm:col-span-2  lg:col-span-1  lg:flex flex-col justify-center items-center  bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900  ">  
        
        <p class=" sm:text-4xl  lg:text-4xl  text-yellow-500 font-bold text-center p-1 ">Build and Command</p> 
        
        <p class="font-semibold text-white sm:text-start lg:text-center  p-1" >Develop your headquarters. Build your army and join the battle among millions!</p>
      
        
      
      </div>


      <div class=" sm:col-span-2 lg:col-span-1  border-2 border-yellow-500 "> <img src="https://image.winudf.com/v2/image1/Y29tLmVwaWN3YXJvbmxpbmUubXNfc2NyZWVuXzFfMTU1MDE4OTQyOF8wNTU/screen-1.jpg?fakeurl=1&amp;type=.jpg" class="ms-auto" > </div>




    </div>







    <div class="grid grid-cols-2">

      <div class="lg:col-span-1 mx-auto border-2 border-yellow-500">  <img src="https://live.staticflickr.com/8149/28350853743_0c93420fec_b.jpg" >  </div>
     
      <div class="  border-2 border-yellow-500 sm:col-span-2  lg:col-span-1 lg:flex flex-col justify-center items-center   bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900   ">  
        
        <p class="font-bold text-yellow-500  lg:text-4xl  text-center p-1  " >CONQUER OTHER PLAYERS!</p>
        <p class="text-white   font-semibold   sm:text-start  lg:text-center  p-1">Mobilize your army and prove your dominance by defeating the other players.</p>
                      
      </div>

    </div>


    <div class="grid grid-cols-2">

      <div class="lg:col-span-1"></div>
      <div class="lg:col-span-1"></div>

    </div>

  </div>









   </div>










  <div class="bg-light-brown py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-base/7 text-black-400 font-semibold ">{{ stat.name }}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent sm:text-5xl lg:text-8xl">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
  </div>

  <section class="container-fluid p-15 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 ">


<p class="p-5 font-bold  text-white  sm:text-2xl lg:text-7xl  ">Frequently asked questions (FAQ)</p>


<div class="grid grid-cols-2 p-4 ">

  <div class="sm:col-span-2 lg:col-span-1  mx-auto text-white font-semibold lg:text-2xl" >How can ı  a Create an Account?</div>
  <div class="sm:col-span-2 lg:col-span-1 mx-auto text-yellow-500 font-semibold lg:text-2xl ">You can create an account by clicking right <a href="" class="text-white" style="text-decoration: underline;">here</a> and start your journey on Mobile Strike.</div>


</div>

<hr>

<div class="grid grid-cols-2 p-4 ">

  <div class="sm:col-span-2 lg:col-span-1  mx-auto text-white font-semibold lg:text-2xl" >How can ı  a Create an Account?</div>
  <div class="sm:col-span-2 lg:col-span-1 mx-auto text-yellow-500 font-semibold lg:text-2xl ">You can create an account by clicking right <a href="">here</a> and start your journey on Mobile Strike.</div>


</div>


<hr>

<div class="grid grid-cols-2 p-4 ">

  <div class="sm:col-span-2 lg:col-span-1  mx-auto text-white font-semibold lg:text-2xl" >How can ı  a Create an Account?</div>
  <div class="sm:col-span-2 lg:col-span-1 mx-auto text-yellow-500 font-semibold lg:text-2xl ">You can create an account by clicking right <a href="">here</a> and start your journey on Mobile Strike.</div>


</div>

<hr>

<div class="grid grid-cols-2 p-4 ">

  <div class="sm:col-span-2 lg:col-span-1  mx-auto text-white font-semibold lg:text-2xl" >How can ı  a Create an Account?</div>
  <div class="sm:col-span-2 lg:col-span-1 mx-auto text-yellow-500 font-semibold lg:text-2xl ">You can create an account by clicking right <a href="">here</a> and start your journey on Mobile Strike.</div>


</div>

<hr>


<div class="grid grid-cols-2 p-4 ">

  <div class="sm:col-span-2 lg:col-span-1  mx-auto text-white font-semibold lg:text-2xl" >How can ı  a Create an Account?</div>
  <div class="sm:col-span-2 lg:col-span-1 mx-auto text-yellow-500 font-semibold lg:text-2xl ">You can create an account by clicking right <a href="">here</a> and start your journey on Mobile Strike.</div>


</div>









  </section>












 </div>

<footer>

  <div class="container-fluid mx-auto  bg-gray-400 dark:bg-gray-600 ">
       
    <div class="grid mx-auto grid-cols-4 gap-2">
            <div class="col-span-4 sm:col-span-4 lg:col-span-1 mx-auto p-4"><h1 class="text-yellow-500  text-4xl ">About Us</h1>
                <hr>
            <ul style="list-style: none;" class="text-white  text-2xl ">
                <li  >Developer info</li>
                <li> <a href="/contact">Contact Us </a>  </li>
                       <ul>
                    <li class="ps-4">xxx@gmail.com</li>
                    <li class="ps-4" > xxx 444 xxx</li>
                </ul>  
                <li> <a href="" class="lg:hover:text-blue-500 transition duration-300">Privacy Policy</a></li>
            </ul>
            </div>

            <div class="col-span-4 sm:col-span-4 lg:col-span-1  mx-auto">
                  <h1 class="text-yellow-500  text-4xl p-2 ">Support</h1>
                <hr>
            <ul style="list-style: none;" class="text-white  text-2xl ">
                <li  >Developer info</li>
                <li> <a href="/contact">Contact Us </a>  </li>
                       <ul>
                    <li class="ps-4">xxx@gmail.com</li>
                    <li class="ps-4" > xxx 444 xxx</li>
                </ul>  
                <li> <a href="" class="lg:hover:text-blue-500 transition duration-300">Privacy Policy</a></li>
            </ul>


            </div>
            <div class="col-span-4 sm:col-span-4 lg:col-span-1  p-2 mx-auto">

<h1 class="text-yellow-500  text-4xl ">About Us</h1>
                <hr>
            <ul style="list-style: none;" class="text-white  text-2xl ">
                <li  >Developer info</li>
                <li> <a href="/contact">Contact Us </a>  </li>
                       <ul>
                    <li class="ps-4">xxx@gmail.com</li>
                    <li class="ps-4" > xxx 444 xxx</li>
                </ul>  
                <li> <a href="" class="lg:hover:text-blue-500 transition duration-300">Privacy Policy</a></li>
            </ul>

            </div>
          
            <div class="col-span-4 sm:col-span-4 lg:col-span-1  p-2 flex flex-col justify-center items-center mx-auto">
              
                <p class="text-white sm:text-xl lg:text-3xl font-semibold m-2">Download Our Game</p>
                <div class="flex flex-col mx-auto m-3">
                    <a href="#" class="flex items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-google-play pe-2 pt-3  text-white" viewBox="0 0 16 16">
  <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
</svg>
                        <p class="text-white font-semibold pt-2 text-3xl">Google Play Store</p>
                    </a>
                </div>

                <div class="flex flex-col mx-auto m-3">
                    <a href="#" class="flex items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-apple pe-2 pt-3 dark:text-white" viewBox="0 0 16 16">
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
</svg>
                        <p class="text-white font-semibold pt-2 text-3xl">App Store</p>
                    </a>
                </div>

            </div>

        </div>


       

        <div class="grid grid-cols-1 mx-auto">
            <h1 class="text-white text-xl font-semibold mx-auto ">Follow Us</h1>
            <div class="col-span-1 flex gap-4  mx-auto text-white"> 
                
            
            
            
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
            
            
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
            




<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>
        

(
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>
 //
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
)
            </div>
        </div>
    </div>



</footer>

</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '/features' },
  { name: 'Contact', href: '/contact' },
  { name: 'Company', href: '#' },
]

const mobileMenuOpen = ref(false)



const stats = [
  { id: 1, name: 'Top Game on PlayStore', value: '3.9 ★' },
  { id: 2, name: 'Millions Of Players', value: '50+ Million' },
  { id: 3, name: 'Daily Average Active Player Count ', value: '50,000' },
]






import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  // Dark mode class'ını body elementine ekle
  document.body.classList.add("dark");
});

onBeforeUnmount(() => {
  // Sayfa değiştirildiğinde dark mode'u kaldır
  document.body.classList.remove("dark");
});




</script>