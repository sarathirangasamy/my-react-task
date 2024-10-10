import axios from "axios";
import { JobEntryDetails } from ".";
import { useState } from "react";

interface JobEntryPropType {
  setJobEntryInfo: React.Dispatch<React.SetStateAction<JobEntryDetails>>;
  jobEntryInfo: JobEntryDetails;
}

export const JobEntryFields: React.FC<JobEntryPropType> = ({
  setJobEntryInfo,
  jobEntryInfo,
}) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onChangeInputValue = (value: string, field: string) => {
    setJobEntryInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onFinish = () => {
    try {
      setIsDisabled(true);
      setErrorMessage("");
      const modifyJobEntry = {
        job: jobEntryInfo?.job,
        address: jobEntryInfo?.address,
        fee: Number(jobEntryInfo?.fee) || 0,
        contractDate: jobEntryInfo?.contractDate,
        deliveredDate: jobEntryInfo?.deliveredDate,
        feeCollectedDate: jobEntryInfo?.feeCollectedDate,
        feeCollected: Number(jobEntryInfo?.feeCollected) || 0,
        paymentTerms: jobEntryInfo?.paymentTerms,
        expenses: Number(jobEntryInfo?.expenses) || 0,
        expensesTerms: jobEntryInfo?.expensesTerms,
        subContractor: jobEntryInfo?.subContractor,
        subContractorFee: Number(jobEntryInfo?.subContractorFee) || 0,
        modumFee: Number(jobEntryInfo?.modumFee) || 0,
        netFee: Number(jobEntryInfo?.netFee) || 0,
        internalReview: jobEntryInfo?.internalReview,
        marketing: jobEntryInfo?.marketing,
        marketingInPercentage: Number(jobEntryInfo?.marketingInPercentage) || 0,
        marketingInDollar: Number(jobEntryInfo?.marketingInDollar) || 0,
        corporateInPercentage: Number(jobEntryInfo?.corporateInPercentage) || 0,
        corporateInDollar: Number(jobEntryInfo?.corporateInDollar) || 0,
        productionInPercentage:
          Number(jobEntryInfo?.productionInPercentage) || 0,
        productionInDollar: Number(jobEntryInfo?.productionInDollar) || 0,
        appraiser_1: jobEntryInfo?.appraiser_1,
        appraiser_1InPercentage:
          Number(jobEntryInfo?.appraiser_1InPercentage) || 0,
        appraiser_1InDollar: Number(jobEntryInfo?.appraiser_1InDollar) || 0,
        appraiser_2: jobEntryInfo?.appraiser_2,
        appraiser_2InPercentage:
          Number(jobEntryInfo?.appraiser_2InPercentage) || 0,
        appraiser_2InDollar: Number(jobEntryInfo?.appraiser_2InDollar) || 0,
        appraiser_3: jobEntryInfo?.appraiser_3,
        appraiser_3InPercentage:
          Number(jobEntryInfo?.appraiser_3InPercentage) || 0,
        appraiser_3InDollar: Number(jobEntryInfo?.appraiser_3InDollar) || 0,
        irInPercentage: Number(jobEntryInfo?.irInPercentage) || 0,
        irInDollar: Number(jobEntryInfo?.irInDollar) || 0,
        total: Number(jobEntryInfo?.total) || 0,
        hourlyCharger: false,
      };

      axios
        .post("http://localhost:3333/api/job-entry/create", {
          modifyJobEntry,
        })
        .then((response) => {
          console.log(response.data);
          setIsDisabled(false);
          setJobEntryInfo({
            job: "",
            address: "",
            fee: 0,
            contractDate: "",
            deliveredDate: "",
            feeCollectedDate: "",
            feeCollected: 0,
            paymentTerms: "",
            expenses: 0,
            expensesTerms: "",
            subContractor: "",
            subContractorFee: 0,
            modumFee: 0,
            netFee: 0,
            internalReview: "",
            marketing: "",
            marketingInPercentage: 0,
            marketingInDollar: 0,
            corporateInPercentage: 0,
            corporateInDollar: 0,
            productionInPercentage: 0,
            productionInDollar: 0,
            appraiser_1: "",
            appraiser_1InPercentage: 0,
            appraiser_1InDollar: 0,
            appraiser_2: "",
            appraiser_2InPercentage: 0,
            appraiser_2InDollar: 0,
            appraiser_3: "",
            appraiser_3InPercentage: 0,
            appraiser_3InDollar: 0,
            irInPercentage: 0,
            irInDollar: 0,
            total: 0,
            hourlyCharger: false,
          });
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            setErrorMessage(error.response.data.message || "An error occurred");
          } else {
            setErrorMessage("An unknown error occurred");
          }
        });
    } catch (error) {
      setIsDisabled(false);
      setErrorMessage("An unexpected error occurred");
      console.log(error);
    }
  };

  return (
    <>
      <div className="job-entry-fields-custom-align">
        <div>
          <label>Job#</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="text"
            value={jobEntryInfo?.job}
            placeholder=" Job"
            onChange={(e) => onChangeInputValue(e?.target?.value, "job")}
          ></input>
        </div>

        <div>
          <label>Address</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="text"
            placeholder=" Address"
            value={jobEntryInfo?.address}
            onChange={(e) => onChangeInputValue(e?.target?.value, "address")}
          ></input>
        </div>

        <div>
          <label>FEE$</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="number"
            placeholder=" Fee"
            value={jobEntryInfo?.fee}
            onChange={(e) => onChangeInputValue(e?.target?.value, "fee")}
          ></input>
        </div>

        <div>
          <label>Contract Date</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="date"
            placeholder="Contract Date"
            value={jobEntryInfo?.contractDate}
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "contractDate")
            }
          ></input>
        </div>

        <div>
          <label>Delivered Date</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="date"
            placeholder=" Delivered Date"
            value={jobEntryInfo?.deliveredDate}
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "deliveredDate")
            }
          ></input>
        </div>
      </div>

      <div className="job-entry-fields-custom-align">
        <div>
          <label>Fee Cancelled - Date</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="date"
            placeholder=" Fee Cancelled Date"
            value={jobEntryInfo?.feeCollectedDate}
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "feeCollectedDate")
            }
          ></input>
        </div>

        <div>
          <label>Fee Collected $</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="number"
            placeholder=" Fee Collected"
            value={jobEntryInfo?.feeCollected}
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "feeCollected")
            }
          ></input>
        </div>

        <div>
          <label>Payment Terms</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="text"
            placeholder="Payment Terms"
            value={jobEntryInfo?.paymentTerms}
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "paymentTerms")
            }
          ></input>
        </div>

        <div>
          <label>Expenses</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="number"
            placeholder=" Expenses"
            value={jobEntryInfo?.expenses}
            onChange={(e) => onChangeInputValue(e?.target?.value, "expenses")}
          ></input>
        </div>

        <div>
          <label>Expenses Terms</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="text"
            placeholder=" Expense Terms"
            value={jobEntryInfo?.expensesTerms}
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "expensesTerms")
            }
          ></input>
        </div>
      </div>

      <div className="job-entry-fields-custom-align">
        <div>
          <label>Sub Contractor</label>
          <br />

          <select
            className="job-entry-custom-input-design"
            value={jobEntryInfo?.subContractor}
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "subContractor")
            }
          >
            <option>Select</option>
            <option value={"Rocio_Ortiz"}>Rocio Ortiz</option>
            <option value={"Bruce_GreenBerg"}>Bruce Green Berg</option>
            <option value={"Victor_Romano"}>Victor Romano</option>
          </select>
        </div>

        <div>
          <label>Sub Contractor Fee$</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="number"
            placeholder=" Sub Contractor Fee"
            value={jobEntryInfo?.subContractorFee}
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "subContractorFee")
            }
          ></input>
        </div>

        <div>
          <label>Modam Fee</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="number"
            placeholder=" Modam Fee"
            value={jobEntryInfo?.modumFee}
            onChange={(e) => onChangeInputValue(e?.target?.value, "modumFee")}
          ></input>
        </div>

        <div>
          <label>Net Fee %</label>
          <br />
          <input
            className="job-entry-custom-input-design"
            type="number"
            placeholder=" Net Fee"
            value={jobEntryInfo?.netFee}
            onChange={(e) => onChangeInputValue(e?.target?.value, "netFee")}
          ></input>
        </div>

        <div>
          <label>Internal Review</label>
          <br />

          <select
            className="job-entry-custom-input-design"
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "internalReview")
            }
            value={jobEntryInfo?.internalReview}
          >
            <option>Select</option>
            <option value={"Rocio_Ortiz"}>Rocio Ortiz</option>
            <option value={"Bruce_GreenBerg"}>Bruce Green Berg</option>
            <option value={"Bruce_Romano"}>Bruce Romano</option>
            <option value={"Romano_Bruce"}> Romano Bruce</option>
          </select>
        </div>
      </div>

      <div className="job-entry-fields-custom-align">
        <div>
          <label>Marketing</label>
          <br />
          <select
            className="job-entry-custom-input-design"
            onChange={(e) => onChangeInputValue(e?.target?.value, "marketing")}
            value={jobEntryInfo?.marketing}
          >
            <option>Select</option>
            <option value={"Rocio_Ortiz"}>Rocio Ortiz</option>
            <option value={"Bruce_GreenBerg"}>Bruce Green Berg</option>
            <option value={"Bruce_Romano"}>Bruce Romano</option>
            <option value={"Romano_Bruce"}> Romano Bruce</option>
          </select>
        </div>

        <div>
          <div>
            <label>Marketing % </label>
            <br />
            <input
              className="job-entry-custom-medium-input-design"
              type="number"
              placeholder=" Marketing in  %"
              value={jobEntryInfo?.marketingInPercentage}
              onChange={(e) =>
                onChangeInputValue(e?.target?.value, "marketingInPercentage")
              }
            ></input>
          </div>
          <div>
            <label>Marketing $</label>
            <br />
            <input
              className="job-entry-custom-medium-input-design"
              type="number"
              placeholder=" Marketing in $"
              value={jobEntryInfo?.marketingInDollar}
              onChange={(e) =>
                onChangeInputValue(e?.target?.value, "marketingInDollar")
              }
            ></input>
          </div>
        </div>

        <div>
          <div>
            <label>Corporate % </label>
            <br />
            <input
              className="job-entry-custom-medium-input-design"
              type="number"
              placeholder=" Corporate %"
              value={jobEntryInfo?.corporateInPercentage}
              onChange={(e) =>
                onChangeInputValue(e?.target?.value, "corporateInPercentage")
              }
            ></input>
          </div>
          <div>
            <label>Corporate $</label>
            <br />
            <input
              className="job-entry-custom-medium-input-design"
              type="number"
              placeholder=" Corporate $"
              value={jobEntryInfo?.corporateInDollar}
              onChange={(e) =>
                onChangeInputValue(e?.target?.value, "corporateInDollar")
              }
            ></input>
          </div>
        </div>

        <div>
          <div>
            <label>Production % </label>
            <br />
            <input
              className="job-entry-custom-medium-input-design"
              type="number"
              placeholder=" Production %"
              value={jobEntryInfo?.productionInPercentage}
              onChange={(e) =>
                onChangeInputValue(e?.target?.value, "productionInPercentage")
              }
            ></input>
          </div>
          <div>
            <label>Production $</label>
            <br />
            <input
              className="job-entry-custom-medium-input-design"
              type="number"
              placeholder=" Production $"
              value={jobEntryInfo?.productionInDollar}
              onChange={(e) =>
                onChangeInputValue(e?.target?.value, "productionInDollar")
              }
            ></input>
          </div>
        </div>

        <div>
          <label>APPRAISER 1 </label>
          <br />

          <select
            className="job-entry-custom-input-design"
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "appraiser_1")
            }
            value={jobEntryInfo?.appraiser_1}
          >
            <option>Select</option>
            <option value={"Rocio_Ortiz"}>Rocio Ortiz</option>
            <option value={"Bruce_GreenBerg"}>Bruce Green Berg</option>
            <option value={"Bruce_Romano"}>Bruce Romano</option>
            <option value={"Romano_Bruce"}> Romano Bruce</option>
          </select>
        </div>
      </div>

      <div className="job-entry-fields-custom-align">
        <div>
          <div>
            <label>APPRAISER 1 % </label>
            <br />
            <input
              className="job-entry-custom-medium-input-design"
              type="number"
              placeholder=" APPRAISER 1 %"
              value={jobEntryInfo?.appraiser_1InPercentage}
              onChange={(e) =>
                onChangeInputValue(e?.target?.value, "appraiser_1InPercentage")
              }
            ></input>
          </div>
          <div>
            <label>APPRAISER 1 $</label>
            <br />
            <input
              className="job-entry-custom-medium-input-design"
              type="number"
              placeholder=" APPRAISER 1 $"
              value={jobEntryInfo?.appraiser_1InDollar}
              onChange={(e) =>
                onChangeInputValue(e?.target?.value, "appraiser_1InDollar")
              }
            ></input>
          </div>
        </div>

        <div>
          <label>APPRAISER 2 </label>
          <br />
          <select
            className="job-entry-custom-input-design"
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "appraiser_2")
            }
            value={jobEntryInfo?.appraiser_2}
          >
            <option>Select</option>
            <option value={"Rocio_Ortiz"}>Rocio Ortiz</option>
            <option value={"Bruce_GreenBerg"}>Bruce Green Berg</option>
            <option value={"Bruce_Romano"}>Bruce Romano</option>
            <option value={"Romano_Bruce"}> Romano Bruce</option>
          </select>
        </div>

        <div>
          <div>
            <label>APPRAISER 2 % </label>
            <br />
            <input
              className="job-entry-custom-medium-input-design"
              type="text"
              placeholder=" APPRAISER 2 %"
              value={jobEntryInfo?.appraiser_2InPercentage}
              onChange={(e) =>
                onChangeInputValue(e?.target?.value, "appraiser_2InPercentage")
              }
            ></input>
          </div>
          <div>
            <label>APPRAISER 2 $</label>
            <br />
            <input
              className="job-entry-custom-medium-input-design"
              type="text"
              placeholder=" APPRAISER 2 $"
              value={jobEntryInfo?.appraiser_2InDollar}
              onChange={(e) =>
                onChangeInputValue(e?.target?.value, "appraiser_2InDollar")
              }
            ></input>
          </div>
        </div>

        <div>
          <label>APPRAISER 3 </label>
          <br />

          <select
            className="job-entry-custom-input-design"
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "appraiser_3")
            }
            value={jobEntryInfo?.appraiser_3}
          >
            <option>Select</option>
            <option value={"Rocio_Ortiz"}>Rocio Ortiz</option>
            <option value={"Bruce_GreenBerg"}>Bruce Green Berg</option>
            <option value={"Bruce_Romano"}>Bruce Romano</option>
            <option value={"Romano_Bruce"}> Romano Bruce</option>
          </select>
        </div>

        <div>
          <div>
            <label>APPRAISER 3 % </label>
            <br />
            <input
              className="job-entry-custom-medium-input-design"
              type="text"
              placeholder=" APPRAISER 3 % "
              value={jobEntryInfo?.appraiser_3InPercentage}
              onChange={(e) =>
                onChangeInputValue(e?.target?.value, "appraiser_3InPercentage")
              }
            ></input>
          </div>
          <div>
            <label>APPRAISER 3 $</label>
            <br />
            <input
              className="job-entry-custom-medium-input-design"
              type="text"
              placeholder=" APPRAISER 3 $"
              value={jobEntryInfo?.appraiser_3InDollar}
              onChange={(e) =>
                onChangeInputValue(e?.target?.value, "appraiser_3InDollar")
              }
            ></input>
          </div>
        </div>
      </div>

      <div className="job-entry-fields-custom-align">
        <div>
          <label>IR % </label>
          <br />
          <input
            className="job-entry-custom-medium-input-design"
            type="number"
            placeholder="IR %"
            value={jobEntryInfo?.irInPercentage}
            onChange={(e) =>
              onChangeInputValue(e?.target?.value, "irInPercentage")
            }
          ></input>
        </div>
        <div>
          <label>IR $</label>
          <br />
          <input
            className="job-entry-custom-medium-input-design"
            type="number"
            placeholder=" IR $"
            onChange={(e) => onChangeInputValue(e?.target?.value, "irInDollar")}
            value={jobEntryInfo?.irInDollar}
          ></input>
        </div>

        <div>
          <label>Total %</label>
          <br />
          <input
            className="job-entry-custom-medium-input-design"
            type="number"
            onChange={(e) => onChangeInputValue(e?.target?.value, "total")}
            value={jobEntryInfo?.total}
          ></input>
        </div>

        <div>
          <label>Hourly Charges</label>
          <br />
          <input
            type="checkbox"
            onChange={(e: any) => {
              onChangeInputValue(e?.target?.checked, "hourlyCharger");
            }}
          />
        </div>

        <div></div>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="btn-align">
        <div>
          <button
            className="save-primary-btn"
            disabled={isDisabled}
            onClick={onFinish}
          >
            Save
          </button>
        </div>

        <div>
          <button className="discard-primary-btn"> Discard</button>
        </div>
      </div>
    </>
  );
};
