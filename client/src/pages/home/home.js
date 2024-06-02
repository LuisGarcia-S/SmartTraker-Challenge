import "./home.css";
import DataTable from "../../components/DataTable/DataTable";
import CardComponent from "../../components/CardPost/CardPost";

export default function Home() {
    return (
        <div className="Home">
            Hello World!
           <DataTable/> 
            <CardComponent/>
        </div>
    )
}
