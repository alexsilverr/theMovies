import Movies from "../componentes/Movies";
import { Search } from "../componentes/Search";


export function LandingPage(){
    return(
        <div >
            <Search />
            <Movies />
        </div>
        
    );
};