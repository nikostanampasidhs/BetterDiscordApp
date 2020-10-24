import {React, DiscordModules} from "modules";
import MagnifyingGlass from "../icons/magnifyingglass";

export default class NoResults extends React.Component {
    render() {
        return <div className={"bd-empty-results" + (this.props.className ? ` ${this.props.className}` : "")}>
                    <MagnifyingGlass />
                    {DiscordModules.Strings.SEARCH_NO_RESULTS || ""}
                </div>;
    }
}