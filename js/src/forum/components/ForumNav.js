import Component from "flarum/common/Component";
import IndexPage from "flarum/components/IndexPage";
import SelectDropdown from "flarum/components/SelectDropdown";

export default class ForumNav extends Component {
  view() {
    return (
      <div> </div>
    );
  }

  navItems() {
    const items = IndexPage.prototype.navItems();

    // We want the active screen to show up in the top dropdown when on mobile.
    if (app.screen() !== "phone") {
      items.remove("blog");
    }

    return items;
  }
}
