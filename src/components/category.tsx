// import React, { useState } from 'react'

// const ShowcaseNavbar = () => {
//     // Assume ShowcaseNavbar is defined in another file
//     return <nav>...</nav>;
//   };
  
//   const KoiCard = ({ name, type, color, size, price, image, description }:any) => {
//     const [isExpanded, setIsExpanded] = useState(false);
  
//     return (
//   //     <motion.div
//   //       layout
//   //       className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
//   //       initial={{ opacity: 0, scale: 0.9 }}
//   //       animate={{ opacity: 1, scale: 1 }}
//   //       transition={{ duration: 0.5 }}
//   //     >
//   //       <div className="relative">
//   //         <img src={image} alt={name} className="w-full h-48 object-cover" />
//   //         <div className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 text-sm font-semibold">
//   //           {type}
//   //         </div>
//   //       </div>
//   //       <div className="p-4">
//   //         <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
//   //         <p className="text-lg font-bold text-red-600 mb-2">${price}</p>
//   //         <AnimatePresence>
//   //           {isExpanded && (
//   //             <motion.div
//   //               initial={{ opacity: 0, height: 0 }}
//   //               animate={{ opacity: 1, height: 'auto' }}
//   //               exit={{ opacity: 0, height: 0 }}
//   //               transition={{ duration: 0.3 }}
//   //             >
//   //               <p className="text-sm text-gray-600 mb-1">Color: {color}</p>
//   //               <p className="text-sm text-gray-600 mb-1">Size: {size}</p>
//   //               <p className="text-sm text-gray-600 mb-2">{description}</p>
//   //             </motion.div>
//   //           )}
//   //         </AnimatePresence>
//   //         <motion.button
//   //           className="mt-2 text-red-600 flex items-center justify-center w-full bg-red-100 py-2 rounded-md"
//   //           onClick={() => setIsExpanded(!isExpanded)}
//   //           whileHover={{ scale: 1.05 }}
//   //           whileTap={{ scale: 0.95 }}
//   //         >
//   //           {isExpanded ? (
//   //             <>
//   //               <ChevronUp className="mr-1" /> Less info
//   //             </>
//   //           ) : (
//   //             <>
//   //               <ChevronDown className="mr-1" /> More info
//   //             </>
//   //           )}
//   //         </motion.button>
//   //       </div>
//   //     </motion.div>
//   //   );
//   // };
  
//   // const FilterButton = ({ children, isActive, onClick }:any) => (
//   //   <motion.button
//   //     className={`px-4 py-2 rounded-full ${
//   //       isActive ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'
//   //     }`}
//   //     onClick={onClick}
//   //     whileHover={{ scale: 1.05 }}
//   //     whileTap={{ scale: 0.95 }}
//   //   >
//   //     {children}
//   //   </motion.button>
//   // );
  
// const Category = () => {
    
//   //   const [searchTerm, setSearchTerm] = useState('');
//   // const [activeFilter, setActiveFilter] = useState('All');
//   // const [showInfo, setShowInfo] = useState(false);

//   // const koiList = [
//   //   { name: "Kohaku", type: "Gosanke", color: "Red and White", size: "Medium", price: 1000, image: "/placeholder.svg?height=200&width=300&text=Kohaku", description: "The Kohaku is a white-skinned koi with large red patches." },
//   //   { name: "Showa", type: "Gosanke", color: "Red, White, and Black", size: "Large", price: 1500, image: "/placeholder.svg?height=200&width=300&text=Showa", description: "The Showa is a black koi with red and white markings." },
//   //   { name: "Sanke", type: "Gosanke", color: "White with Red and Black", size: "Medium", price: 1200, image: "/placeholder.svg?height=200&width=300&text=Sanke", description: "The Sanke is a white-skinned koi with red and black markings." },
//   //   { name: "Asagi", type: "Kawarimono", color: "Blue and Red", size: "Small", price: 800, image: "/placeholder.svg?height=200&width=300&text=Asagi", description: "The Asagi has a light blue body with red markings on the sides." },
//   //   { name: "Shusui", type: "Kawarimono", color: "Blue and Red", size: "Medium", price: 900, image: "/placeholder.svg?height=200&width=300&text=Shusui", description: "The Shusui is a doitsu (scaleless) version of the Asagi." },
//   //   { name: "Kujaku", type: "Hikarimoyo", color: "Metallic with Reticulated Scales", size: "Large", price: 2000, image: "/placeholder.svg?height=200&width=300&text=Kujaku", description: "The Kujaku is a metallic koi with a reticulated (net-like) scale pattern." },
//   // ];

//   // const filteredKoi = koiList.filter(koi => 
//   //   (activeFilter === 'All' || koi.type === activeFilter) &&
//   //   koi.name.toLowerCase().includes(searchTerm.toLowerCase())
//   // );

//   // return (
//   //    <div className="bg-gradient-to-br from-red-50 to-orange-50 min-h-screen">
//   //     <ShowcaseNavbar />

//   //     <main className="container mx-auto px-4 py-8">
//   //       <motion.h1 
//   //         className="text-5xl font-bold text-center text-red-800 mb-8"
//   //         initial={{ opacity: 0, y: -50 }}
//   //         animate={{ opacity: 1, y: 0 }}
//   //         transition={{ duration: 0.5 }}
//   //       >
//   //         Koi Categories
//   //       </motion.h1>

//   //       <motion.p
//   //         className="text-center text-gray-600 mb-8 max-w-2xl mx-auto"
//   //         initial={{ opacity: 0 }}
//   //         animate={{ opacity: 1 }}
//   //         transition={{ duration: 0.5, delay: 0.2 }}
//   //       >
//   //         Discover the beauty and elegance of various Koi types. Each Koi brings its unique charm and symbolism to your pond, enhancing the Feng Shui of your space.
//   //       </motion.p>

//   //       <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//   //         <motion.div 
//   //           className="relative mb-4 md:mb-0"
//   //           initial={{ opacity: 0, x: -50 }}
//   //           animate={{ opacity: 1, x: 0 }}
//   //           transition={{ duration: 0.5, delay: 0.2 }}
//   //         >
//   //           <input
//   //             type="text"
//   //             placeholder="Search Koi..."
//   //             className="bg-white text-gray-800 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-64 shadow-md"
//   //             value={searchTerm}
//   //             onChange={(e) => setSearchTerm(e.target.value)}
//   //           />
//   //           <Search className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
//   //         </motion.div>

//   //         <motion.div 
//   //           className="flex space-x-2 overflow-x-auto pb-2 md:pb-0"
//   //           initial={{ opacity: 0, x: 50 }}
//   //           animate={{ opacity: 1, x: 0 }}
//   //           transition={{ duration: 0.5, delay: 0.4 }}
//   //         >
//   //           <FilterButton isActive={activeFilter === 'All'} onClick={() => setActiveFilter('All')}>
//   //             All
//   //           </FilterButton>
//   //           <FilterButton isActive={activeFilter === 'Gosanke'} onClick={() => setActiveFilter('Gosanke')}>
//   //             Gosanke
//   //           </FilterButton>
//   //           <FilterButton isActive={activeFilter === 'Kawarimono'} onClick={() => setActiveFilter('Kawarimono')}>
//   //             Kawarimono
//   //           </FilterButton>
//   //           <FilterButton isActive={activeFilter === 'Hikarimoyo'} onClick={() => setActiveFilter('Hikarimoyo')}>
//   //             Hikarimoyo
//   //           </FilterButton>
//   //         </motion.div>
//   //       </div>

//   //       <motion.div 
//   //         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//   //         initial={{ opacity: 0 }}
//   //         animate={{ opacity: 1 }}
//   //         transition={{ duration: 0.5, delay: 0.6 }}
//   //       >
//   //         {filteredKoi.map((koi, index) => (
//   //           <KoiCard key={index} {...koi} />
//   //         ))}
//   //       </motion.div>

//   //       {filteredKoi.length === 0 && (
//   //         <motion.p 
//   //           className="text-center text-gray-600 mt-8 text-lg"
//   //           initial={{ opacity: 0 }}
//   //           animate={{ opacity: 1 }}
//   //           transition={{ duration: 0.5 }}
//   //         >
//   //           No Koi found matching your search criteria. Try adjusting your filters or search term.
//   //         </motion.p>
//   //       )}

//   //       <motion.div
//   //         className="fixed bottom-4 right-4"
//   //         whileHover={{ scale: 1.1 }}
//   //         whileTap={{ scale: 0.9 }}
//   //       >
//   //         <button
//   //           className="bg-red-600 text-white p-3 rounded-full shadow-lg"
//   //           onClick={() => setShowInfo(!showInfo)}
//   //         >
//   //           <Info size={24} />
//   //         </button>
//   //       </motion.div>

//   //       <AnimatePresence>
//   //         {showInfo && (
//   //           <motion.div
//   //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
//   //             initial={{ opacity: 0 }}
//   //             animate={{ opacity: 1 }}
//   //             exit={{ opacity: 0 }}
//   //           >
//   //             <motion.div
//   //               className="bg-white rounded-lg p-6 max-w-md"
//   //               initial={{ scale: 0.9, y: 50 }}
//   //               animate={{ scale: 1, y: 0 }}
//   //               exit={{ scale: 0.9, y: 50 }}
//   //             >
//   //               <h2 className="text-2xl font-bold text-red-800 mb-4">About Koi Categories</h2>
//   //               <p className="text-gray-600 mb-4">
//   //                 Koi fish are categorized based on their color patterns and scales. The main categories include:
//   //               </p>
//   //               <ul className="list-disc list-inside text-gray-600 mb-4">
//   //                 <li>Gosanke: The "Big Three" (Kohaku, Showa, Sanke)</li>
//   //                 <li>Kawarimono: "Changing" or non-Gosanke varieties</li>
//   //                 <li>Hikarimoyo: Metallic koi with patterns</li>
//   //               </ul>
//   //               <p className="text-gray-600 mb-4">
//   //                 Each type of Koi has its own unique characteristics and symbolism in Feng Shui.
//   //               </p>
//   //               <button
//   //                 className="bg-red-600 text-white px-4 py-2 rounded-md"
//   //                 onClick={() => setShowInfo(false)}
//   //               >
//   //                 Close
//   //               </button>
//   //             </motion.div>
//   //           </motion.div>
//   //         )}
//   //       </AnimatePresence>
//   //     </main>
//   //   </div>
//   );
// }

// export default Category