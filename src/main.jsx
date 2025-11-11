import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ChickenBreastPage from './ChickenBreastPage'
import EggsPage from './EggsPage'
import SalmonPage from './SalmonPage'
import TunaPage from './TunaPage'
import GreekYogurtPage from './GreekYogurtPage'
import PaneerPage from './PaneerPage'
import TofuPage from './TofuPage'
import LentilsPage from './LentilsPage'
import ChickpeasPage from './ChickpeasPage'
import KidneyBeansPage from './KidneyBeansPage'
import BlackBeansPage from './BlackBeansPage'
import PeanutsPage from './PeanutsPage'
import AlmondsPage from './AlmondsPage'
import WalnutsPage from './WalnutsPage'
import CashewsPage from './CashewsPage'
import PumpkinSeedsPage from './PumpkinSeedsPage'
import SunflowerSeedsPage from './SunflowerSeedsPage'
import FlaxseedsPage from './FlaxseedsPage'
import ChiaSeedsPage from './ChiaSeedsPage'
import OatsPage from './OatsPage'
import QuinoaPage from './QuinoaPage'
import BrownRicePage from './BrownRicePage'
import WhiteRicePage from './WhiteRicePage'
import WholeWheatBreadPage from './WholeWheatBreadPage'
import AvocadoPage from './AvocadoPage'
import BroccoliPage from './BroccoliPage'
import SpinachPage from './SpinachPage'
import KalePage from './KalePage'
import MushroomsPage from './MushroomsPage'
import PotatoesPage from './PotatoesPage'
import SweetPotatoesPage from './SweetPotatoesPage'
import EggWhitesPage from './EggWhitesPage'
import WholeMilkPage from './WholeMilkPage'
import SkimMilkPage from './SkimMilkPage'
import SoyMilkPage from './SoyMilkPage'
import CottageCheesePage from './CottageCheesePage'
import CheddarCheesePage from './CheddarCheesePage'
import MozzarellaPage from './MozzarellaPage'
import YogurtPage from './YogurtPage'
import TempehPage from './TempehPage'
import EdamamePage from './EdamamePage'
import PeasPage from './PeasPage'
import CornPage from './CornPage'
import ShrimpPage from './ShrimpPage'
import CrabPage from './CrabPage'
import LobsterPage from './LobsterPage'
import PrawnsPage from './PrawnsPage'
import BeefPage from './BeefPage'
import LambPage from './LambPage'
import PorkPage from './PorkPage'
import TurkeyPage from './TurkeyPage'
import DuckPage from './DuckPage'
import CodPage from './CodPage'
import SardinesPage from './SardinesPage'
import AnchoviesPage from './AnchoviesPage'
import MackerelPage from './MackerelPage'
import TilapiaPage from './TilapiaPage'
import CatfishPage from './CatfishPage'
import ScallopsPage from './ScallopsPage'
import OystersPage from './OystersPage'
import ClamsPage from './ClamsPage'
import OctopusPage from './OctopusPage'
import SquidPage from './SquidPage'
import DuckEggsPage from './DuckEggsPage'
import GoatCheesePage from './GoatCheesePage'
import RicottaPage from './RicottaPage'
import ParmesanPage from './ParmesanPage'
import CottageCheeseLowFatPage from './CottageCheeseLowFatPage'
import ProteinPowderPage from './ProteinPowderPage'
import WheyProteinPage from './WheyProteinPage'
import PeaProteinPage from './PeaProteinPage'
import BrownRiceProteinPage from './BrownRiceProteinPage'
import HempProteinPage from './HempProteinPage'
import SeitanPage from './SeitanPage'
import EggNoodlesPage from './EggNoodlesPage'
import PastaPage from './PastaPage'
import BarleyPage from './BarleyPage'
import MilletPage from './MilletPage'
import BuckwheatPage from './BuckwheatPage'
import AmaranthPage from './AmaranthPage'
import CouscousPage from './CouscousPage'
import FarroPage from './FarroPage'
import TeffPage from './TeffPage'
import SoybeansPage from './SoybeansPage'
import ToorDalPage from './ToorDalPage'
import MoongDalPage from './MoongDalPage'
import MasoorDalPage from './MasoorDalPage'
import UradDalPage from './UradDalPage'
import RajmaPage from './RajmaPage'
import ChanaDalPage from './ChanaDalPage'
import GreenGramPage from './GreenGramPage'
import HorseGramPage from './HorseGramPage'
import BengalGramPage from './BengalGramPage'
import SoyaChunksPage from './SoyaChunksPage'
import SproutsPage from './SproutsPage'
import EggOmelettePage from './EggOmelettePage'
import ProteinBarPage from './ProteinBarPage'
import PaneerBhurjiPage from './PaneerBhurjiPage'
import CottageCheeseToastPage from './CottageCheeseToastPage'
import ProteinShakePage from './ProteinShakePage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/foods/chicken-breast" element={<ChickenBreastPage />} />
        <Route path="/foods/eggs" element={<EggsPage />} />
        <Route path="/foods/salmon" element={<SalmonPage />} />
        <Route path="/foods/tuna" element={<TunaPage />} />
        <Route path="/foods/greek-yogurt" element={<GreekYogurtPage />} />
        <Route path="/foods/paneer" element={<PaneerPage />} />
        <Route path="/foods/tofu" element={<TofuPage />} />
        <Route path="/foods/lentils" element={<LentilsPage />} />
        <Route path="/foods/chickpeas" element={<ChickpeasPage />} />
        <Route path="/foods/kidney-beans" element={<KidneyBeansPage />} />
        <Route path="/foods/black-beans" element={<BlackBeansPage />} />
        <Route path="/foods/peanuts" element={<PeanutsPage />} />
        <Route path="/foods/almonds" element={<AlmondsPage />} />
        <Route path="/foods/walnuts" element={<WalnutsPage />} />
        <Route path="/foods/cashews" element={<CashewsPage />} />
        <Route path="/foods/pumpkin-seeds" element={<PumpkinSeedsPage />} />
        <Route path="/foods/sunflower-seeds" element={<SunflowerSeedsPage />} />
        <Route path="/foods/flaxseeds" element={<FlaxseedsPage />} />
        <Route path="/foods/chia-seeds" element={<ChiaSeedsPage />} />
        <Route path="/foods/oats" element={<OatsPage />} />
        <Route path="/foods/quinoa" element={<QuinoaPage />} />
        <Route path="/foods/brown-rice" element={<BrownRicePage />} />
        <Route path="/foods/white-rice" element={<WhiteRicePage />} />
        <Route path="/foods/whole-wheat-bread" element={<WholeWheatBreadPage />} />
        <Route path="/foods/avocado" element={<AvocadoPage />} />
        <Route path="/foods/broccoli" element={<BroccoliPage />} />
        <Route path="/foods/spinach" element={<SpinachPage />} />
        <Route path="/foods/kale" element={<KalePage />} />
        <Route path="/foods/mushrooms" element={<MushroomsPage />} />
        <Route path="/foods/potatoes" element={<PotatoesPage />} />
        <Route path="/foods/sweet-potatoes" element={<SweetPotatoesPage />} />
        <Route path="/foods/egg-whites" element={<EggWhitesPage />} />
        <Route path="/foods/whole-milk" element={<WholeMilkPage />} />
        <Route path="/foods/skim-milk" element={<SkimMilkPage />} />
        <Route path="/foods/soy-milk" element={<SoyMilkPage />} />
        <Route path="/foods/cottage-cheese" element={<CottageCheesePage />} />
        <Route path="/foods/cheddar-cheese" element={<CheddarCheesePage />} />
        <Route path="/foods/mozzarella" element={<MozzarellaPage />} />
        <Route path="/foods/yogurt" element={<YogurtPage />} />
        <Route path="/foods/tempeh" element={<TempehPage />} />
        <Route path="/foods/edamame" element={<EdamamePage />} />
        <Route path="/foods/peas" element={<PeasPage />} />
        <Route path="/foods/corn" element={<CornPage />} />
        <Route path="/foods/shrimp" element={<ShrimpPage />} />
        <Route path="/foods/crab" element={<CrabPage />} />
        <Route path="/foods/lobster" element={<LobsterPage />} />
        <Route path="/foods/prawns" element={<PrawnsPage />} />
        <Route path="/foods/beef" element={<BeefPage />} />
        <Route path="/foods/lamb" element={<LambPage />} />
        <Route path="/foods/pork" element={<PorkPage />} />
        <Route path="/foods/turkey" element={<TurkeyPage />} />
        <Route path="/foods/duck" element={<DuckPage />} />
        <Route path="/foods/cod" element={<CodPage />} />
        <Route path="/foods/sardines" element={<SardinesPage />} />
        <Route path="/foods/anchovies" element={<AnchoviesPage />} />
        <Route path="/foods/mackerel" element={<MackerelPage />} />
        <Route path="/foods/tilapia" element={<TilapiaPage />} />
        <Route path="/foods/catfish" element={<CatfishPage />} />
        <Route path="/foods/scallops" element={<ScallopsPage />} />
        <Route path="/foods/oysters" element={<OystersPage />} />
        <Route path="/foods/clams" element={<ClamsPage />} />
        <Route path="/foods/octopus" element={<OctopusPage />} />
        <Route path="/foods/squid" element={<SquidPage />} />
        <Route path="/foods/duck-eggs" element={<DuckEggsPage />} />
        <Route path="/foods/goat-cheese" element={<GoatCheesePage />} />
        <Route path="/foods/ricotta" element={<RicottaPage />} />
        <Route path="/foods/parmesan" element={<ParmesanPage />} />
        <Route path="/foods/cottage-cheese-lowfat" element={<CottageCheeseLowFatPage />} />
        <Route path="/foods/protein-powder" element={<ProteinPowderPage />} />
        <Route path="/foods/whey-protein" element={<WheyProteinPage />} />
        <Route path="/foods/pea-protein" element={<PeaProteinPage />} />
        <Route path="/foods/brown-rice-protein" element={<BrownRiceProteinPage />} />
        <Route path="/foods/hemp-protein" element={<HempProteinPage />} />
        <Route path="/foods/seitan" element={<SeitanPage />} />
        <Route path="/foods/egg-noodles" element={<EggNoodlesPage />} />
        <Route path="/foods/pasta" element={<PastaPage />} />
        <Route path="/foods/barley" element={<BarleyPage />} />
        <Route path="/foods/millet" element={<MilletPage />} />
        <Route path="/foods/buckwheat" element={<BuckwheatPage />} />
        <Route path="/foods/amaranth" element={<AmaranthPage />} />
        <Route path="/foods/couscous" element={<CouscousPage />} />
        <Route path="/foods/farro" element={<FarroPage />} />
        <Route path="/foods/teff" element={<TeffPage />} />
        <Route path="/foods/soybeans" element={<SoybeansPage />} />
        <Route path="/foods/toor-dal" element={<ToorDalPage />} />
        <Route path="/foods/moong-dal" element={<MoongDalPage />} />
        <Route path="/foods/masoor-dal" element={<MasoorDalPage />} />
        <Route path="/foods/urad-dal" element={<UradDalPage />} />
        <Route path="/foods/rajma" element={<RajmaPage />} />
        <Route path="/foods/chana-dal" element={<ChanaDalPage />} />
        <Route path="/foods/green-gram" element={<GreenGramPage />} />
        <Route path="/foods/horse-gram" element={<HorseGramPage />} />
        <Route path="/foods/bengal-gram" element={<BengalGramPage />} />
        <Route path="/foods/soya-chunks" element={<SoyaChunksPage />} />
        <Route path="/foods/sprouts" element={<SproutsPage />} />
        <Route path="/foods/egg-omelette" element={<EggOmelettePage />} />
        <Route path="/foods/protein-bar" element={<ProteinBarPage />} />
        <Route path="/foods/paneer-bhurji" element={<PaneerBhurjiPage />} />
        <Route path="/foods/cottage-cheese-toast" element={<CottageCheeseToastPage />} />
        <Route path="/foods/protein-shake" element={<ProteinShakePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
