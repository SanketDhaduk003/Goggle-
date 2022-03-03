import React from "react";
import Search from "../components/Search";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import { useGoggleSearch } from "../useGoggleSearch";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term }] = useStateValue();

  // live api call
  const {data} = useGoggleSearch(term);


  // mock api 
  // import Response from "../response";
  // const data = Response;

  return (
    <div className="containerx ">
      <div className="searchPage">
        <div className="row ">
          <div className="container">
            <div className="searchPage_header my-5">
              <div className=" col-xs-1 col-sm-1 logo me-md-2 ms-3">
                <Link to="/">
                  <img
                    className="searchPage_logo"
                    src="https://pixahive.com/wp-content/uploads/2020/09/itcompany-logo-by-pixahive.png"
                  />
                </Link>
              </div>
              <div className=" col-xs-7 col-sm-7">
                <div className="searchPage_headerBody">
                  <Search hideButtons />

                  <div className="searchPage_optionsContainer mb-4 ms-0">
                    <div className="searchPage_optionsLeft">
                      <div className="searchPage_options">
                        <SearchOutlinedIcon />
                        <Link to="/all">All</Link>
                      </div>
                      <div className="searchPage_options">
                        <a href="https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en">
                          
                          <DescriptionIcon />
                          News
                        </a>
                      </div>
                      <div className="searchPage_options">
                        <a href="https://www.google.com/imghp?hl=en">
                          <ImageOutlinedIcon />
                          Images
                        </a>
                      </div>
                      <div className="searchPage_options">
                        <a href="https://www.google.com/search?q=shopping&rlz=1C1CHBF_enIN992IN992&source=lnms&tbm=shop&sa=X&ved=2ahUKEwifspKwpan2AhWHzjgGHXjVARgQ_AUoAXoECAIQAw&cshid=1646288203742400&biw=1366&bih=625&dpr=1&safe=active&ssui=on">
                          <LocalOfferOutlinedIcon />
                          Shopping
                        </a>
                      </div>
                      <div className="searchPage_options">
                        <a href="https://www.google.com/maps">
                          <RoomIcon />
                          &nbsp;Map
                        </a>
                      </div>
                      <div className="searchPage_options">
                        <MoreVertIcon />
                        <Link to="/more">More</Link>
                      </div>
                    </div>

                    <div className="searchPage_optionsRight">
                      <div className="searchPage_options">
                        <Link to="/settings">Settings</Link>
                      </div>

                      <div className="searchPage_options">
                        <Link to="/tools">Tools</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* search result */}
        <div className="container-fluid results">
          <div className="row">
            <div className="col-12  text-wrap">
              {term && (
                <div className="searchPage_results ">
                  <p className="searchPage_resultCount">
                    About {data?.searchInformation.formattedTotalResults}{" "}
                    results ({data?.searchInformation.formattedSearchTime})
                    Seconds for {term}
                  </p>
                  {data?.items.map((item) => (
                    <div className="searchPage_result">
                      <a href={item.link}>
                        {item.pagemap?.cse_image?.length > 0 &&
                          item.pagemap?.cse_image[0]?.src && (
                            <img
                              className="searchPage_resultImage"
                              src={
                                item.pagemap?.cse_image?.length > 0 &&
                                item.pagemap?.cse_image[0]?.src
                              }
                              alt="Searched Image"
                            ></img>
                          )}
                        {item.displayLink}
                      </a>
                      <a className="searchPage_resultTittle" href={item.link}>
                        <h3> {item.title}</h3>
                      </a>

                      <p className="searchPage_resultSnippet" href={item.link}>
                        {item.snippet}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* serch result ends  */}
      </div>
    </div>
  );
}

export default SearchPage;
