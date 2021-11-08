import DigitalBetList from "./DigitalBetList";
import {
  filterFn,
  sliceArrayIntoChunks,
  makeRepeatedArray,
  dynamicSort,
} from "../../utils/general";

const GridItemFiller = ({arr}) => {
  return (
    <>
      {arr.length === 1 && (
        <>
          <div className="grid-item filler"></div>
          <div className="grid-item filler"></div>
        </>
      )}
      {arr.length === 2 && <div className="grid-item filler"></div>}
    </>
  );
};

const DashboardProducts = ({productsList, ideasList, title}) => {
  const maxListLength = 45;
  const maxListLengthPerCol = 15;

  // Products
  const inactiveProducts = productsList
    .filter((item) => filterFn(item.status, ["Paused", "Cancelled"]))
    .slice(0, maxListLength)
    .sort(dynamicSort("-status"));

  const chunkedInactiveProducts = sliceArrayIntoChunks(
    inactiveProducts,
    maxListLengthPerCol
  );

  // Ideas
  const inactiveIdeas = ideasList
    .filter((item) => filterFn(item.status, ["Paused", "Cancelled"]))
    .slice(0, maxListLength)
    .sort(dynamicSort("-status"));

  const chunkedInactiveIdeas = sliceArrayIntoChunks(inactiveIdeas, maxListLengthPerCol);

  return (
    <div
      className="dashboard dashboard--ideas"
      style={{
        "--gridRepeatCount": "6",
        "--gridColWidth": "250px",
      }}
    >
      <div className="container">
        <section className="dashboard__title">{title}</section>
        <section className="dashboard__group-titles">
          <div
            className="dashboard__group-title"
            style={{"--gridSubtitleMultiplier": "3"}}
          >
            Ideas
          </div>
          <div className="dashboard__group-title">Products</div>
        </section>
        <section className="dashboard__grid grid grid--250 grid--alt-cols">
          {chunkedInactiveProducts.map((chunk, idx) => {
            return (
              <div className="grid-item" key={idx + "_grid-item-ideas"}>
                {<DigitalBetList title="" type="ideas" data={chunk} />}
              </div>
            );
          })}
          <GridItemFiller arr={chunkedInactiveProducts} />
          {chunkedInactiveIdeas.map((chunk, idx) => {
            return (
              <div className="grid-item" key={idx + "_grid-item-prods"}>
                {<DigitalBetList title="" type="products" data={chunk} />}
              </div>
            );
          })}
          <GridItemFiller arr={chunkedInactiveIdeas} />
        </section>
      </div>
    </div>
  );
};

export default DashboardProducts;
