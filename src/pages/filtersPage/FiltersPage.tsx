import DropDownCheckBox from "../../components/ui/DropDown/DropDownCheckBox";
import Plate from "../../components/ui/Plate/Plate";
import RangeInput from "../../components/ui/RangeInput/RangeInput";
import TextArea from "../../components/ui/TextArea/TextArea";
import TextInput from "../../components/ui/TextInput/TextInput";

const FiltersPage = () => {
  return (
    <>
      <div style={{ margin: "10px" }}>
        <Plate text={"Title"} />
        <Plate text={"Senior"} />
        <Plate text={"Part time"} />
      </div>
      <div style={{ margin: "10px" }}>
        <TextArea />
      </div>
      <div style={{ margin: "10px" }}>
        <TextInput />
      </div>
      <div style={{ margin: "10px" }}>
        <DropDownCheckBox />
      </div>
      <div style={{ margin: "10px" }}>
        <RangeInput />
      </div>
    </>
  );
};

export default FiltersPage;
