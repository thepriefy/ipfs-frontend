import { connect } from "react-redux";
import FundHoldings from "./fundHoldings";
import { creators } from "./duck";
import { creators as generalCreators } from "../general";

const mapStateToProps = state => ({
  ...state.fundHoldings,
  ...state.factsheet,
});

const mapDispatchToProps = dispatch => ({
  onRequest: () => {
    dispatch(creators.requestHoldings());
  },
  onClick: asset => {
    if (asset !== "MLN-T") {
      const assetPair = `${asset}/MLN-T`;
      dispatch(generalCreators.updateAssetPair(assetPair));
    }
  },
});

const FundHoldingsContainer = connect(mapStateToProps, mapDispatchToProps)(
  FundHoldings,
);

export default FundHoldingsContainer;
