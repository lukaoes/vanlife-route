import { Link } from "react-router-dom"

const VanDetails = () => {

    return (
        <div>
            <Link to='..' relative="path">
                back to all vans
            </Link>
            <br />
            van details
        </div>
    )
}

export default VanDetails

//     < div >
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Layout />}>
//                 <Route index element={<Home />} />
//                 <Route path="about" element={<About />} />
//                 <Route path="vans" element={<Vans />} />
//                 <Route path="vans/:id" element={<VanDetail />} />

//                 <Route path="host" element={<HostLayout />}>
//                     <Route index element={<Dashboard />} />
//                     <Route path="income" element={<Income />} />
//                     <Route path="reviews" element={<Reviews />} />
//                     <Route path="vans" element={<HostVans />} />
//                     <Route path="vans/:id" element={<HostVanDetail />}>
//                         <Route index element={<HostVanInfo />} />
//                         <Route path="pricing" element={<HostVanPricing />} />
//                         <Route path="photos" element={<HostVanPhotos />} />
//                     </Route>
//                 </Route>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// </div >
