import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "./utils/contentApi";
import { cacheResults } from "./utils/searchSlice";
import { addText, clearText } from "./utils/searchFromInputSlice";

// ------------------------------------------------------------------------------


//  -------------------------------------------------------------------


const Head=()=>{
    const [searchQuery,setSearchQuery]=useState("");
    const [suggestions,setSuggestions]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false);

    const [finalsearch,setFinalSearch]=useState("")

    // console.log(finalsearch)

    // ------------------------------------------------------------------------------------

    const setdispatch=useDispatch();
    // const cleardispatch=useDispatch()

    const InputBtnSearch=()=>{
        setdispatch(clearText())
        if(finalsearch){
            setdispatch(addText(finalsearch));
            setFinalSearch("")
        }
        else{
            setdispatch(addText("null"));
        }

    }

    // -------------------------------------------------------------------------------------

    const Myfun=(el)=>{
        // console.log(el)
        setSearchQuery(el)
        setFinalSearch(el)
     }
    
    // -------------------------------------------------------------------------------------

    const searchCache=useSelector((store)=>store.search)
    const dispatch=useDispatch()
    
    // DEBOUNCING:-
    useEffect(() => {
        // console.log(searchQuery);

       const timer= setTimeout(() => {
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery])
        }
        else{

            getSearchSuggestions()
        }
        }, 300);

        return ()=>{
            clearTimeout(timer);
        }

    }, [searchQuery]);
    

    const getSearchSuggestions= async ()=>{
         const data= await fetch(YOUTUBE_SEARCH_API + searchQuery);
         const json= await data.json();
        //  console.log(json[1]);
        setSuggestions(json[1])

        // UPDATE CACHE:-
        dispatch(cacheResults({
            [searchQuery]:json[1]
        }))
    }
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }

    return(
        <div className="grid grid-flow-col p-5 m-2 shadow-lg col-span-1">
        <div className="flex mx-2">
            <img onClick={()=>toggleMenuHandler()} className="h-8 m-auto cursor-pointer" src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png" alt="Menu"/>
            <img className="h-16 m-auto" src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1680x1050/1200x800/filters:focal(840x525:841x526):no_upscale():format(webp)/cdn0.vox-cdn.com/uploads/chorus_asset/file/9130449/YTLogo_old_new_animation.gif" alt="youtube"/>
        </div>
        <div className="col-span-10 px-10">
            <div>
            <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} placeholder="Search..." />
            <button onClick={()=>{
                InputBtnSearch()
                 setSearchQuery("")
                 }} className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100">&#128269;</button>
            </div>
            {showSuggestions&&<div className="fixed bg-white py-2 px-2 w-[28.4rem] shadow-lg rounded-lg border border-gray-100">
                <ul>
                    {
                        suggestions?.map((ele,index)=>{
                          return  <li key={index} className="py-2 px-3 shadow-sm hover:bg-gray-100" 
                          onClick={()=>{
                            Myfun(ele)
                            setShowSuggestions(false)}
                        }>&#128269; {ele}</li>
                        })
                    }
                </ul>
            </div>}
        </div>
        <div className="col-span-1">
            <img className="h-8 m-auto" src="data:image/png;base64,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" alt="user"/>
        </div>
        </div>
    )
};

export default Head;