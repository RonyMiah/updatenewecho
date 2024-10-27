// import React from 'react'

// const ProjectNextTimeNeed = () => {
//   return (
//     <div>
//       <div>
//         Project Items
//         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 my-10">
//           {filteredData.map((project, index) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               onClick={() => handleCardClick(index)}
//             />
//           ))}
//         </div>
//         Modal Section
//         {selectedProjectIndex !== null && (
//           <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 pt-20 ">
//             <div className="p-6 rounded-lg relative max-w-[1300px] w-full shadow-lg">
//               <div className="flex justify-between">
//                 {/* Carousel Navigation (Bottom Info) */}
//                 <div className="flex items-center justify-center mt-4 text-white">
//                   <span className="text-lg font-medium text-white">{`${
//                     selectedProjectIndex + 1
//                   } / ${filteredData.length}`}</span>
//                 </div>
//                 Close Button
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-8 right-8 text-white text-2xl font-bold hover:text-red-500 focus:outline-none"
//                   aria-label="Close Modal"
//                 >
//                   &times;
//                 </button>
//               </div>
//               Carousel Wrapper
//               <div className="relative flex justify-center items-center mt-6">
//                 Left Arrow
//                 <button
//                   onClick={prevProject}
//                   className="absolute left-[-40px] sm:left-[-60px] sx:left-[-20px] top-1/2 transform -translate-y-1/2 text-lg font-bold px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full focus:outline-none z-10"
//                 >
//                   &lt;
//                 </button>
//                 Project Image
//                 <Image
//                   src={filteredData[selectedProjectIndex].image}
//                   alt={filteredData[selectedProjectIndex].title}
//                   className="w-full h-auto rounded-lg mb-4 max-w-[80%] sm:max-w-[90%] sx:max-w-[90%]"
//                   width={500}
//                   height={500}
//                 />
//                 Project Details
//                 <div className="text-start text-white absolute bottom-4 bg-black bg-opacity-80 w-full max-w-[90%] p-3">
//                   <h3 className="text-lg mb-2 text-white">
//                     {filteredData[selectedProjectIndex].title}
//                   </h3>
//                 </div>
//                 Right Arrow
//                 <button
//                   onClick={nextProject}
//                   className="absolute right-[-40px] sm:right-[-60px] sx:right-[-20px] top-1/2 transform -translate-y-1/2 text-lg font-bold px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-full focus:outline-none z-10"
//                 >
//                   &gt;
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProjectNextTimeNeed
