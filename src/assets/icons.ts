import {SlSocialReddit} from "react-icons/sl";
import {BiSearch} from "react-icons/bi";
import {BsFillCaretDownFill} from "react-icons/bs";
import {MdDelete, MdMarkEmailUnread, MdOutlineAdminPanelSettings, MdOutlineDashboard} from "react-icons/md";
import {RiStickyNoteFill} from "react-icons/ri";
import {IoStatsChartSharp} from "react-icons/io5";
import {FiEdit} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";


class Icons {
    public reddit;
    public search;
    public menuDown;
    public home;
    public post;
    public admin;
    public stat;
    public email;
    public edit;
    public delete;
    public close;
    constructor() {
        this.reddit = SlSocialReddit;
        this.search = BiSearch;
        this.menuDown = BsFillCaretDownFill;
        this.home = MdOutlineDashboard;
        this.post = RiStickyNoteFill;
        this.admin = MdOutlineAdminPanelSettings;
        this.stat = IoStatsChartSharp;
        this.email = MdMarkEmailUnread;
        this.edit = FiEdit;
        this.delete = MdDelete;
        this.close = AiOutlineClose;

    }

}


export default Icons;