import {Component} from 'react'
import {FaSearch, FaTrash, FaArrowLeft, FaHome, FaBars} from 'react-icons/fa'
import {v4} from 'uuid'

import './index.css'

class addNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputVal: '',
      searchQuery: '',
      lawyers: [],
      caseNumber: [],
      searchQuery1: '',
      inputVal2: '',
      error: '',
    }
  }

  handleInputChange = e => {
    this.setState({
      inputVal: e.target.value,
    })
  }

  handlePlannerClick = () => {
    const {history} = this.props
    history.replace('/')
  }

  handleInputChange1 = e => {
    this.setState({
      inputVal2: e.target.value,
    })
  }

  handleSearchInputChange = e => {
    this.setState({
      searchQuery: e.target.value,
    })
  }

  handleSearchInputChange1 = e => {
    this.setState({
      searchQuery1: e.target.value,
    })
  }

  handleAddClick = () => {
    const {inputVal, lawyers} = this.state
    if (inputVal.trim() !== '') {
      const newLawyer = inputVal.trim()
      const newLawyers = [...lawyers, newLawyer]
      this.setState({
        lawyers: newLawyers,
        inputVal: '',
      })
    }
  }

  handleAddClick1 = () => {
    const {inputVal2, caseNumber} = this.state
    const newCase = inputVal2.trim()
    const regex = /^(?=.*[A-Z])[A-Za-z\d]{10}$/
    if (newCase && regex.test(newCase)) {
      const newCases = [...caseNumber, newCase]
      this.setState({
        caseNumber: newCases,
        inputVal2: '',
      })
    } else {
      // eslint-disable-next-line
      alert(
        'Please enter a valid case number. Case number have 10 digit and at least one Uppercase letter',
      )
    }
  }

  handleDeleteClick = lawyer => {
    const {lawyers} = this.state
    const index = lawyers.indexOf(lawyer)
    const newLawyers = [...lawyers.slice(0, index), ...lawyers.slice(index + 1)]
    this.setState({
      lawyers: newLawyers,
    })
  }

  handleDeleteClick1 = cases => {
    const {caseNumber} = this.state
    const index = caseNumber.indexOf(cases)
    const newCases = [
      ...caseNumber.slice(0, index),
      ...caseNumber.slice(index + 1),
    ]
    this.setState({
      caseNumber: newCases,
    })
  }

  render() {
    const {
      inputVal,
      searchQuery,
      lawyers,
      inputVal2,
      searchQuery1,
      caseNumber,
      // eslint-disable-next-line
      error,
    } = this.state

    const filteredLawyers = lawyers.filter(lawyer =>
      lawyer.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const filteredCase = caseNumber.filter(lawyer =>
      lawyer.toLowerCase().includes(searchQuery1.toLowerCase()),
    )

    return (
      <>
        <div className="icon-bar">
          <div>
            <div className="icon-container">
              <FaArrowLeft onClick={this.handlePlannerClick} />
            </div>
            <div className="text-container">Back</div>
          </div>
          <div>
            <div className="icon-container">
              <FaHome />
            </div>
            <div className="text-container">SVS</div>
          </div>
          <div>
            <div className="icon-container">
              <FaBars />
            </div>
            <div className="text-container">Menu</div>
          </div>
        </div>

        <div className="bg-container">
          <div className="name-container">
            <div className="name-heading">Add New Lawyer Name</div>
            <div className="card1">
              <label htmlFor="lawyer-name">Lawyer Name</label>
              <input
                type="text"
                id="lawyer-name"
                className="input"
                placeholder="Example: Ashok Kumar Choudhary"
                value={inputVal}
                onChange={this.handleInputChange}
              />
              <hr className="hr" />
              <button
                type="button"
                className="btn"
                onClick={this.handleAddClick}
              >
                Add New
              </button>
            </div>
          </div>
        </div>

        <div className="bg-container">
          <div className="name-container">
            <div className="name-heading">Existing Lawyer Name</div>
            <div className="sub-heading">Note: Tap Lawyer name to delete</div>

            <div className="search-container">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchQuery}
                onChange={this.handleSearchInputChange}
              />
              <FaSearch className="icon" />
            </div>

            <ol className="lawyers-list">
              {filteredLawyers.map((lawyer, index) => (
                <li key={v4()} className="list">
                  {`${index + 1}. ${lawyer}`}
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => this.handleDeleteClick(lawyer)}
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-container">
          <div className="name-container">
            <div className="name-heading">Add New Case</div>
            <div className="card1">
              <label htmlFor="lawyer-name">New Care Number</label>
              <input
                type="text"
                id="lawyer-name"
                className="input"
                placeholder="Example: WP12342013"
                value={inputVal2}
                onChange={this.handleInputChange1}
              />
              <hr className="hr" />
              <button
                type="button"
                className="btn"
                onClick={this.handleAddClick1}
              >
                Add New
              </button>
            </div>
          </div>
        </div>

        <div className="bg-container">
          <div className="name-container">
            <div className="name-heading">Existing Case</div>
            <div className="sub-heading">Note: Tap Case Number to delete</div>

            <div className="search-container">
              <input
                type="text"
                placeholder="Search for content"
                className="search-input"
                value={searchQuery1}
                onChange={this.handleSearchInputChange1}
              />
              <FaSearch className="icon" />
            </div>

            <ol className="lawyers-list">
              {filteredCase.map((cases, index) => (
                <li key={v4()} className="list">
                  {`${index + 1}. ${cases}`}
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => this.handleDeleteClick1(cases)}
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </>
    )
  }
}

export default addNew
