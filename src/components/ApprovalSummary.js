import * as React from "react";
import { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import SummaryTile from "./SummaryTile";
import { tripApprovals } from "../data/tripApprovalData";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "1rem",
    fontWeight: "600",
  },
  summaryContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    padding: "1.5rem 0 0 0",

    "& >div": {
      flex: "1 1 12rem",
      minWidth: "12rem",
      margin: "0 1rem 1.5rem 1rem",
    },
  },
}));

const ApprovalSummary = () => {
  const styles = useStyles();

  //const [approvals, setApprovals] = useState([]);
  const [openCount, setOpenCount] = useState(0);
  const [inReviewCount, setInReviewCount] = useState(0);

  const prepareApprovalSummaryData = approvalData => {
    if (Array.isArray(approvalData)) {
      let openCounter = 0;
      let inReviewCounter = 0;

      approvalData.forEach(approval => {
        if (approval.status === "Open") {
          openCounter++;
        } else if (approval.status === "In Review") {
          inReviewCounter++;
        }
      });

      setOpenCount(openCounter);
      setInReviewCount(inReviewCounter);
    }
  };

  // Note: In this case, I passed [] as a param to useEffect to keep it from continuously being called, which in turn was continuously calling the API
  useEffect(() => {
    /*fetch('https://my.api.mockaroo.com/trip-approvals.json?key=9b4957d0')
			.then((response) => response.json())
      .then((response) => { setApprovals(response); prepareApprovalSummaryData(response); });*/

    //setApprovals(tripApprovals);
    prepareApprovalSummaryData(tripApprovals);
  }, []);

  return (
    <Fragment>
      <Typography variant="h2" className={styles.title}>
        My Approvals
      </Typography>
      <div className={styles.summaryContainer}>
        <SummaryTile
          label="Unread Approvals"
          count={openCount}
          countColor="white"
          countBgColor="maroon"
        />

        <SummaryTile
          label="Approvals In Review"
          count={inReviewCount}
          countColor="white"
          countBgColor="teal"
        />
      </div>
    </Fragment>
  );
};

export default ApprovalSummary;
