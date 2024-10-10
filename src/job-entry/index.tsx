import { useState } from "react";
import { JobEntryFields } from "./job-entery-fields";
import "./style.css";

export interface JobEntryDetails {
  job: string;
  address: string;
  fee: number;
  contractDate: string;
  deliveredDate: string;

  feeCollectedDate: string;
  feeCollected: number;
  paymentTerms: string;
  expenses: number;
  expensesTerms: string;

  subContractor: string;
  subContractorFee: number;
  modumFee: number;
  netFee: number;
  internalReview: string;

  marketing: string;
  marketingInPercentage: number;
  marketingInDollar: number;

  corporateInPercentage: number;
  corporateInDollar: number;
  productionInPercentage: number;
  productionInDollar: number;

  appraiser_1: string;
  appraiser_1InPercentage: number;
  appraiser_1InDollar: number;

  appraiser_2: string;
  appraiser_2InPercentage: number;
  appraiser_2InDollar: number;

  appraiser_3: string;
  appraiser_3InPercentage: number;
  appraiser_3InDollar: number;

  irInPercentage: number;
  irInDollar: number;
  total: number;

  hourlyCharger: boolean;
}

export const JobEntry: React.FC = () => {
  const [jobEntryInfo, setJobEntryInfo] = useState<JobEntryDetails>({
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

  return (
    <div className="content-align">
      <h4 className="job-entry-title">Job Entry</h4>
      <p className="job-entry-sub-title">
        Home /<span className="custom-color-sub-title">Job Entry</span>{" "}
      </p>

      <div className="job-entry-card">
        <JobEntryFields
          setJobEntryInfo={setJobEntryInfo}
          jobEntryInfo={jobEntryInfo}
        />
      </div>
    </div>
  );
};
