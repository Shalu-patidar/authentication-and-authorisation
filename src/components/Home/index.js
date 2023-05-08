import {useState} from 'react'
import {useHistory} from 'react-router-dom'

import {
  FaBars,
  FaCalendarAlt,
  FaHome,
  FaRedo,
  FaSearch,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaRegArrowAltCircleDown,
} from 'react-icons/fa'
import {BsTools} from 'react-icons/bs'

import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'

import './index.css'

function Home() {
  const history = useHistory()

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isExpanded1, setIsExpanded1] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpen1, setIsModalOpen1] = useState(false)

  const handleBsToolsClick1 = () => {
    setIsModalOpen1(true)
  }

  const handleCloseModal1 = () => {
    setIsModalOpen1(false)
  }

  const handleBsToolsClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleCalendarClick = () => {
    setIsSidebarOpen(true)
  }

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  const toggleExpansion1 = () => {
    setIsExpanded1(!isExpanded1)
  }

  const handleButtonClick = () => {
    history.push('/addNew')
  }

  return (
    <>
      <div className="icon-bar">
        <div>
          <div className="icon-container">
            <FaCalendarAlt onClick={handleCalendarClick} />
          </div>
          <div className="text-container">Calendar</div>
        </div>
        <div>
          <div className="icon-container">
            <FaRedo />
          </div>
          <div className="text-container">Refresh</div>
        </div>
        <div>
          <div className="icon-container">
            <FaHome />
          </div>
          <div className="text-container">SVS</div>
        </div>
        <div>
          <div className="icon-container">
            <FaSearch />
          </div>
          <div className="text-container">Search</div>
        </div>
        <div>
          <div className="icon-container">
            <FaBars />
          </div>
          <div className="text-container">Menu</div>
        </div>
      </div>

      <div className="big-container">
        <div className="containers">
          <div className="card2">
            <div className="name1">
              <FaRegArrowAltCircleDown className="icons" />
              <span className="span">2014-07-03 List-Daily (1-Case)</span>
            </div>
          </div>

          <div className="card3">
            <div className="f">
              <div className="name1">
                {isExpanded ? (
                  <AiFillMinusCircle
                    className="icons"
                    onClick={toggleExpansion}
                  />
                ) : (
                  <AiFillPlusCircle
                    className="icons"
                    onClick={toggleExpansion}
                  />
                )}
                <span className="span1">Ajit Singh and SHANTANU KEMKAR</span>
              </div>
            </div>
            {isExpanded && (
              <div className="content" style={{background: 'white'}}>
                <div className="card-heading">
                  Court No.- Room- Division Bench
                </div>
                <div>
                  <p className="heading">111. WP-4115/2014</p>
                  <p className="para">
                    *MOTION HEARING,FINAL DISPOSAL AT ADMISSION STAGE - CIVIL
                    CAESE, for orders(F.D.)*
                  </p>
                  <p className="para1">
                    Dr.(miss) ambica sharma v/s the state of madhya pradesh
                  </p>
                  <p className="para3">
                    <BsTools onClick={handleBsToolsClick} />

                    {isModalOpen && (
                      <div className="modal">
                        <div className="modal-content">
                          <button onClick={handleCloseModal} type="button">
                            <FaTimes className="ico" />
                          </button>
                          <p>thank you</p>
                        </div>
                      </div>
                    )}

                    <span className="para4">Tap here for option</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="containers1">
          <div className="card2">
            <div className="name1">
              <FaRegArrowAltCircleDown className="icons" />
              <span className="span">2014-07-03 List-Daily (1-Case)</span>
            </div>
          </div>

          <div className="card3">
            <div className="f">
              <div className="name1">
                {isExpanded1 ? (
                  <AiFillMinusCircle
                    className="icons"
                    onClick={toggleExpansion1}
                  />
                ) : (
                  <AiFillPlusCircle
                    className="icons"
                    onClick={toggleExpansion1}
                  />
                )}
                <span className="span1">Ajit Singh and SHANTANU KEMKAR</span>
              </div>
            </div>
            {isExpanded1 && (
              <div className="content" style={{background: 'white'}}>
                <div className="card-heading">
                  Court No.- Room- Division Bench
                </div>
                <div>
                  <p className="heading">111. WP-4115/2014</p>
                  <p className="para">
                    *MOTION HEARING,FINAL DISPOSAL AT ADMISSION STAGE - CIVIL
                    CAESE, for orders(F.D.)*
                  </p>
                  <p className="para1">
                    Dr.(miss) ambica sharma v/s the state of madhya pradesh
                  </p>
                  <p className="para3">
                    <BsTools onClick={handleBsToolsClick1} />

                    {isModalOpen1 && (
                      <div className="modal">
                        <div className="modal-content">
                          <button onClick={handleCloseModal1} type="button">
                            <FaTimes className="ico" />
                          </button>
                          <p>Thank you</p>
                        </div>
                      </div>
                    )}

                    <span className="para4">Tap here for option</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="container">
            <div className="calendar-content">
              <div className="left-arrow-container">
                <FaArrowLeft className="arrow-icon" />
              </div>
              <div className="calendar-container">
                <div className="calendar-icon-container">
                  <FaCalendarAlt className="calendar-icon" />
                  <span className="text">Calender</span>
                </div>
              </div>
              <div className="right-arrow-container">
                <FaArrowRight className="arrow-icon" />
              </div>
              <button onClick={handleCloseSidebar} type="button">
                <FaTimes />
              </button>
            </div>
          </div>
          <hr />
          <div className="planner-container">
            <div className="date-container">
              <span className="date">Tue, 5 Aug 2014 </span>
              <button className="case-button" type="button">
                2 Case
              </button>
              <FaArrowRight
                className="planner-icon"
                onClick={handleButtonClick}
              />
              <div className="d-color">D(2)</div>
            </div>
          </div>
          <hr />

          <div className="planner-container">
            <div className="date-container">
              <span className="date">Wed, 6 Aug 2014 </span>
              <button className="case-button" type="button">
                2 Case
              </button>
              <FaArrowRight
                className="planner-icon"
                onClick={handleButtonClick}
              />
              <div className="d-color">D(2)</div>
            </div>
          </div>
          <hr />
          <div className="planner-container">
            <div className="date-container">
              <span className="date">Thu, 6 Aug 2014 </span>
              <button className="case-button" type="button">
                3 Case
              </button>
              <FaArrowRight
                className="planner-icon"
                onClick={handleButtonClick}
              />
              <div className="d-color1">D(3)</div>
            </div>
          </div>
          <hr />
          <div className="planner-container">
            <div className="date-container">
              <span className="date">Fri, 7 Aug 2014 </span>
              <button className="case-button" type="button">
                5 Case
              </button>
              <FaArrowRight
                className="planner-icon"
                onClick={handleButtonClick}
              />
              <div className="d-color1">D(5)</div>
            </div>
          </div>
          <hr />
          <div className="planner-container">
            <div className="date-container">
              <span className="date">Sat, 8 Aug 2014 </span>
              <button className="case-button" type="button">
                0 Case
              </button>
              <FaArrowRight
                className="planner-icon"
                onClick={handleButtonClick}
              />
              <div className="d-color2">D(3)</div>
            </div>
          </div>
          <hr />
          <div className="planner-container">
            <div className="date-container">
              <span className="date">Sun, 9 Aug 2014 </span>
              <button className="case-button" type="button">
                0 Case
              </button>
              <FaArrowRight
                className="planner-icon"
                onClick={handleButtonClick}
              />
              <div className="d-color2">D(3)</div>
            </div>
          </div>
          <hr />
        </div>
      )}
    </>
  )
}

export default Home
