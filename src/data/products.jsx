/* ── shared SVG icons (currentColor = works on any bg) ── */
export const Icon = {
    laptop: (size = 56) => (
        <svg width={size} height={size} viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="2" width="48" height="32" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
            <rect x="9" y="7" width="38" height="22" rx="1.5" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5" fill="currentColor" fillOpacity=".05"/>
            <line x1="14" y1="13" x2="38" y2="13" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="14" y1="18" x2="38" y2="18" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="14" y1="23" x2="30" y2="23" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M1 36h54" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <rect x="20" y="34" width="16" height="3" rx="1.5" fill="currentColor" fillOpacity=".3"/>
        </svg>
    ),
    monitor: (size = 56) => (
        <svg width={size} height={size} viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="50" height="34" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
            <rect x="8" y="8" width="40" height="24" rx="1.5" fill="currentColor" fillOpacity=".07" stroke="currentColor" strokeOpacity=".3" strokeWidth="1"/>
            <line x1="13" y1="14" x2="36" y2="14" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="13" y1="19" x2="43" y2="19" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="13" y1="24" x2="28" y2="24" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M24 37v8" stroke="currentColor" strokeOpacity=".4" strokeWidth="2" strokeLinecap="round"/>
            <rect x="16" y="45" width="24" height="3" rx="1.5" fill="currentColor" fillOpacity=".3"/>
            <circle cx="43" cy="30" r="2" fill="currentColor" fillOpacity=".5"/>
        </svg>
    ),
    printer: (size = 56) => (
        <svg width={size} height={size} viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="14" width="46" height="22" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
            <rect x="11" y="5" width="34" height="12" rx="2" fill="currentColor" fillOpacity=".07" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5"/>
            <rect x="11" y="30" width="34" height="18" rx="2" fill="currentColor" fillOpacity=".07" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5"/>
            <line x1="16" y1="37" x2="40" y2="37" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="16" y1="42" x2="34" y2="42" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="42" cy="23" r="2.5" fill="currentColor" fillOpacity=".5"/>
            <circle cx="35" cy="23" r="2.5" fill="currentColor" fillOpacity=".3"/>
        </svg>
    ),
    aio: (size = 56) => (
        <svg width={size} height={size} viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="50" height="36" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
            <rect x="8" y="8" width="40" height="26" rx="1.5" fill="currentColor" fillOpacity=".07" stroke="currentColor" strokeOpacity=".3" strokeWidth="1"/>
            <line x1="13" y1="16" x2="38" y2="16" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="13" y1="22" x2="43" y2="22" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="13" y1="28" x2="30" y2="28" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M28 39v8" stroke="currentColor" strokeOpacity=".4" strokeWidth="2" strokeLinecap="round"/>
            <rect x="18" y="47" width="20" height="3" rx="1.5" fill="currentColor" fillOpacity=".3"/>
        </svg>
    ),
    tower: (size = 56) => (
        <svg width={size} height={size} viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="3" width="30" height="50" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
            <rect x="10" y="8" width="20" height="14" rx="1.5" fill="currentColor" fillOpacity=".07" stroke="currentColor" strokeOpacity=".3" strokeWidth="1"/>
            <circle cx="20" cy="32" r="7" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" fill="none"/>
            <circle cx="20" cy="32" r="2.5" fill="currentColor" fillOpacity=".4"/>
            <circle cx="12" cy="44" r="2" fill="currentColor" fillOpacity=".5"/>
            <rect x="10" y="47" width="14" height="2.5" rx="1.25" fill="currentColor" fillOpacity=".3"/>
        </svg>
    ),
    ssd: (size = 56) => (
        <svg width={size} height={size} viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="58" height="32" rx="5" stroke="currentColor" strokeWidth="2" fill="none"/>
            <rect x="9" y="12" width="18" height="16" rx="2.5" fill="currentColor" fillOpacity=".07" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5"/>
            <line x1="34" y1="16" x2="54" y2="16" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="34" y1="21" x2="54" y2="21" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="34" y1="26" x2="47" y2="26" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="6" y="32" width="5" height="3" rx="1" fill="currentColor" fillOpacity=".3"/>
            <rect x="13" y="32" width="3" height="3" rx="1" fill="currentColor" fillOpacity=".3"/>
            <rect x="18" y="32" width="5" height="3" rx="1" fill="currentColor" fillOpacity=".3"/>
        </svg>
    ),
    hdd: (size = 56) => (
        <svg width={size} height={size} viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="8" width="58" height="32" rx="5" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="26" cy="24" r="11" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" fill="none"/>
            <circle cx="26" cy="24" r="6" stroke="currentColor" strokeOpacity=".25" strokeWidth="1" fill="none"/>
            <circle cx="26" cy="24" r="2.5" fill="currentColor" fillOpacity=".45"/>
            <line x1="44" y1="16" x2="58" y2="16" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="44" y1="21" x2="58" y2="21" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="52" cy="30" r="2.5" fill="currentColor" fillOpacity=".4"/>
        </svg>
    ),
    gpu: (size = 56) => (
        <svg width={size} height={size} viewBox="0 0 72 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="10" width="56" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
            <rect x="8" y="15" width="16" height="14" rx="2" fill="currentColor" fillOpacity=".08" stroke="currentColor" strokeOpacity=".4" strokeWidth="1"/>
            <rect x="30" y="15" width="8" height="6" rx="1" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".3" strokeWidth="1"/>
            <rect x="40" y="15" width="8" height="6" rx="1" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".3" strokeWidth="1"/>
            <rect x="30" y="24" width="8" height="6" rx="1" fill="currentColor" fillOpacity=".07"/>
            <rect x="40" y="24" width="8" height="6" rx="1" fill="currentColor" fillOpacity=".07"/>
            <rect x="59" y="13" width="10" height="5" rx="2" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeOpacity=".3" strokeWidth="1"/>
            <rect x="59" y="22" width="10" height="5" rx="2" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeOpacity=".3" strokeWidth="1"/>
            <line x1="3" y1="37" x2="59" y2="37" stroke="currentColor" strokeOpacity=".2" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round"/>
        </svg>
    ),
    ram: (size = 56) => (
        <svg width={size} height={size} viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="56" height="20" rx="2.5" stroke="currentColor" strokeWidth="2" fill="none"/>
            <rect x="9"  y="13" width="7" height="10" rx="1.5" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeOpacity=".4" strokeWidth="1"/>
            <rect x="19" y="13" width="7" height="10" rx="1.5" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeOpacity=".4" strokeWidth="1"/>
            <rect x="29" y="13" width="7" height="10" rx="1.5" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeOpacity=".4" strokeWidth="1"/>
            <rect x="39" y="13" width="7" height="10" rx="1.5" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeOpacity=".4" strokeWidth="1"/>
            <rect x="49" y="13" width="7" height="10" rx="1.5" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeOpacity=".4" strokeWidth="1"/>
            <line x1="4" y1="30" x2="60" y2="30" stroke="currentColor" strokeOpacity=".15" strokeWidth="1"/>
            {[8,16,24,32,40].map(x => <rect key={x} x={x} y="32" width="3" height="3" rx=".5" fill="currentColor" fillOpacity=".25"/>)}
        </svg>
    ),
    headset: (size = 56) => (
        <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 28C10 17 18 9 28 9C38 9 46 17 46 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <rect x="5" y="26" width="8" height="14" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity=".08"/>
            <rect x="43" y="26" width="8" height="14" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity=".08"/>
            <path d="M46 37C46 42 44 46 40 47L36 49" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <rect x="33" y="47" width="10" height="5" rx="2.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".1"/>
        </svg>
    ),
    keyboard: (size = 56) => (
        <svg width={size} height={size} viewBox="0 0 72 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="12" width="52" height="28" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
            {[0,1,2,3,4,5,6].map(i => (
                <rect key={i} x={7+i*7} y="18" width="5" height="4.5" rx=".8" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeOpacity=".35" strokeWidth=".8"/>
            ))}
            {[0,1,2,3,4,5].map(i => (
                <rect key={i} x={9+i*7} y="25" width="5" height="4.5" rx=".8" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeOpacity=".3" strokeWidth=".8"/>
            ))}
            <rect x="15" y="32" width="22" height="4.5" rx=".8" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeOpacity=".35" strokeWidth=".8"/>
            <circle cx="62" cy="26" r="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".07"/>
            <circle cx="62" cy="26" r="2.5" fill="currentColor" fillOpacity=".35"/>
        </svg>
    ),
    hub: (size = 56) => (
        <svg width={size} height={size} viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="12" width="52" height="20" rx="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            {[0,1,2,3,4,5,6].map(i => (
                <rect key={i} x={12+i*7} y="8" width="3.5" height="7" rx=".8" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeOpacity=".3" strokeWidth=".8"/>
            ))}
            <circle cx="14" cy="22" r="2.5" fill="currentColor" fillOpacity=".4"/>
            <circle cx="22" cy="22" r="2.5" fill="currentColor" fillOpacity=".4"/>
            <circle cx="30" cy="22" r="2.5" fill="currentColor" fillOpacity=".4"/>
            <circle cx="38" cy="22" r="2.5" fill="currentColor" fillOpacity=".4"/>
            <circle cx="46" cy="22" r="2.5" fill="currentColor" fillOpacity=".2"/>
            <path d="M32 32v8" stroke="currentColor" strokeOpacity=".35" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    ),
};

/* ── category meta ─────────────────────────────────────── */
export const catMeta = {
    Laptops:     { gradient: "from-primary/8 to-indigo-500/8 dark:from-primary/15 dark:to-indigo-500/15",   color: "text-primary" },
    Monitors:    { gradient: "from-indigo-500/8 to-violet-500/8 dark:from-indigo-500/15 dark:to-violet-500/15", color: "text-indigo-600 dark:text-indigo-400" },
    Printers:    { gradient: "from-blue-500/8 to-cyan-500/8 dark:from-blue-500/15 dark:to-cyan-500/15",     color: "text-blue-600 dark:text-blue-400" },
    Desktops:    { gradient: "from-primary/8 to-blue-600/8 dark:from-primary/15 dark:to-blue-600/15",       color: "text-primary" },
    Components:  { gradient: "from-violet-500/8 to-purple-500/8 dark:from-violet-500/15 dark:to-purple-500/15", color: "text-violet-600 dark:text-violet-400" },
    Accessories: { gradient: "from-blue-500/8 to-teal-500/8 dark:from-blue-500/15 dark:to-teal-500/15",    color: "text-blue-500 dark:text-teal-400" },
};

/* ── products ──────────────────────────────────────────── */
export const products = [
    {
        id: 1, category: "Laptops", name: "Refurbished Dell Latitude 5520",
        tagline: "Enterprise reliability at a fraction of the cost.",
        spec: "Intel Core i5 | 16GB RAM | 512GB SSD | Win 11 Pro",
        specs: { Processor:"Intel Core i5-1145G7", RAM:"16GB DDR4", Storage:"512GB NVMe SSD", OS:"Windows 11 Pro", Display:'15.6" FHD IPS', Battery:"Up to 8 hrs", Grade:"A — Fully Tested", Warranty:"90 days" },
        description: "The Dell Latitude 5520 is a business-class laptop built for reliability and performance. Sourced, graded and quality-checked by NIBX before every bulk shipment. Ideal for enterprise deployments, office refreshes and IT programmes across the US.",
        grade: "Grade A", tag: "Best Seller", icon: Icon.laptop,
    },
    {
        id: 2, category: "Laptops", name: "HP EliteBook 840 G8",
        tagline: "Sleek, secure, built for the modern workforce.",
        spec: "Intel Core i7 | 16GB RAM | 256GB SSD | Win 11 Pro",
        specs: { Processor:"Intel Core i7-1165G7", RAM:"16GB DDR4", Storage:"256GB NVMe SSD", OS:"Windows 11 Pro", Display:'14" FHD IPS', Battery:"Up to 10 hrs", Grade:"A+ — Like New", Warranty:"90 days" },
        description: "HP's flagship EliteBook series, known for military-grade durability and enterprise security features. Available in bulk for US businesses — sourced directly and tested to Grade A+ standard.",
        grade: "Grade A+", tag: "New Arrival", icon: Icon.laptop,
    },
    {
        id: 3, category: "Laptops", name: "Lenovo ThinkPad T14 (Refurb)",
        tagline: "Legendary ThinkPad durability, budget-friendly.",
        spec: "AMD Ryzen 5 | 8GB RAM | 512GB SSD | Win 10 Pro",
        specs: { Processor:"AMD Ryzen 5 PRO 4650U", RAM:"8GB DDR4", Storage:"512GB SSD", OS:"Windows 10 Pro", Display:'14" FHD IPS', Battery:"Up to 9 hrs", Grade:"B — Minor cosmetic wear", Warranty:"60 days" },
        description: "Lenovo ThinkPad T14 refurbished to Grade B standard — minor cosmetic wear, fully functional. Perfect for high-volume budget-conscious deployments without compromising on performance.",
        grade: "Grade B", tag: "Bulk Deal", icon: Icon.laptop,
    },
    {
        id: 4, category: "Laptops", name: 'MacBook Pro 13" M1 (Refurb)',
        tagline: "Apple silicon power, refurbished to perfection.",
        spec: "Apple M1 | 8GB RAM | 256GB SSD | macOS",
        specs: { Processor:"Apple M1 (8-core)", RAM:"8GB Unified Memory", Storage:"256GB SSD", OS:"macOS Ventura", Display:'13.3" Retina', Battery:"Up to 17 hrs", Grade:"A — Fully Tested", Warranty:"90 days" },
        description: "Refurbished MacBook Pro 13-inch with Apple M1 chip. Tested and certified to Grade A. Available in limited bulk quantities — ideal for creative teams and developers.",
        grade: "Grade A", tag: "", icon: Icon.laptop,
    },
    {
        id: 5, category: "Monitors", name: 'Dell UltraSharp 24" FHD',
        tagline: "Precision colour. Built for the professional desk.",
        spec: "1920×1080 | IPS | 60Hz | HDMI + DisplayPort",
        specs: { Resolution:"1920×1080 FHD", Panel:"IPS Anti-glare", RefreshRate:"60Hz", Connectivity:"HDMI, DisplayPort, USB 3.0 Hub", ResponseTime:"5ms GtG", Brightness:"350 cd/m²", Size:'24"', Warranty:"1 year" },
        description: "Dell UltraSharp 24-inch FHD monitor with IPS panel for accurate colour reproduction. A staple for enterprise and office deployments across the US. Available in large quantities.",
        grade: "", tag: "Best Seller", icon: Icon.monitor,
    },
    {
        id: 6, category: "Monitors", name: 'HP 27" 4K UHD Display',
        tagline: "Stunning 4K clarity for demanding workloads.",
        spec: "3840×2160 | IPS | USB-C | Anti-glare",
        specs: { Resolution:"3840×2160 4K UHD", Panel:"IPS Anti-glare", Connectivity:"USB-C 65W, HDMI, DisplayPort", Brightness:"400 cd/m²", Colour:"99% sRGB", Size:'27"', ResponseTime:"5ms", Warranty:"1 year" },
        description: "HP's 27-inch 4K UHD display with USB-C power delivery. Ideal for design studios, engineering firms and executive offices. Sourced in bulk and shipped across the US.",
        grade: "", tag: "New Arrival", icon: Icon.monitor,
    },
    {
        id: 7, category: "Monitors", name: 'LG 24" Full HD IPS',
        tagline: "Smooth, vibrant visuals with AMD FreeSync.",
        spec: "1920×1080 | IPS | 75Hz | AMD FreeSync",
        specs: { Resolution:"1920×1080 FHD", Panel:"IPS Anti-glare", RefreshRate:"75Hz", Sync:"AMD FreeSync", Connectivity:"HDMI, D-Sub", Brightness:"250 cd/m²", Size:'24"', Warranty:"1 year" },
        description: "LG 24-inch IPS monitor at 75Hz with AMD FreeSync. A high-value option for offices requiring large monitor deployments without breaking the budget.",
        grade: "", tag: "Bulk Deal", icon: Icon.monitor,
    },
    {
        id: 8, category: "Printers", name: "HP LaserJet Pro M404dn",
        tagline: "Fast, reliable laser printing for busy offices.",
        spec: "40 ppm | Auto Duplex | Ethernet | USB",
        specs: { PrintSpeed:"40 ppm", Duplex:"Automatic", Connectivity:"Ethernet, USB", FirstPageOut:"6.4 sec", MonthlyDuty:"80,000 pages", Toner:"HP 58A / 58X", Paper:"Up to A4", Warranty:"1 year" },
        description: "HP LaserJet Pro M404dn — industry-leading print speed and reliability for high-volume office use. Stocked in bulk by NIBX for fast US fulfilment.",
        grade: "", tag: "Best Seller", icon: Icon.printer,
    },
    {
        id: 9, category: "Printers", name: "Canon PIXMA G6020 MegaTank",
        tagline: "Ink-saving MegaTank for high-volume colour printing.",
        spec: "Inkjet | Wireless | Duplex | 4800×1200 dpi",
        specs: { Technology:"Inkjet MegaTank", Resolution:"4800×1200 dpi", Connectivity:"Wi-Fi, USB", Duplex:"Automatic", Colour:"Yes — CMYK", Paper:"Up to 8.5×14\"", Tank:"Up to 7,700 pages (black)", Warranty:"1 year" },
        description: "Canon PIXMA G6020 with refillable MegaTank ink system — drastically reduces per-page cost for businesses with high colour print demands.",
        grade: "", tag: "", icon: Icon.printer,
    },
    {
        id: 10, category: "Printers", name: "Epson EcoTank ET-4850",
        tagline: "All-in-one convenience, ultra-low ink costs.",
        spec: "All-in-One | Inkjet | Wi-Fi | Duplex ADF",
        specs: { Type:"All-in-One (Print/Scan/Copy/Fax)", Technology:"EcoTank Inkjet", Connectivity:"Wi-Fi, Ethernet, USB", ADF:"35-sheet Auto Document Feeder", Duplex:"Automatic", Yield:"Up to 4,500 pages (black)", Mobile:"Yes — Epson Smart Panel", Warranty:"2 years" },
        description: "Epson EcoTank ET-4850 — an all-in-one powerhouse with ultra-low running costs. Perfect for SMBs and offices looking to reduce printing costs significantly.",
        grade: "", tag: "New Arrival", icon: Icon.printer,
    },
    {
        id: 11, category: "Desktops", name: "Dell OptiPlex 7090 AiO",
        tagline: "All-in-one desktop engineered for enterprise.",
        spec: 'Intel Core i7 | 16GB | 512GB SSD | 23.8" FHD',
        specs: { Processor:"Intel Core i7-1165G7", RAM:"16GB DDR4", Storage:"512GB SSD", Display:'23.8" FHD IPS Touch', OS:"Windows 11 Pro", Form:"All-in-One", Grade:"A — Tested", Warranty:"90 days" },
        description: "Dell OptiPlex 7090 All-in-One — a clean, cable-free desktop solution for corporate environments. Grade A certified. Available for bulk ordering across the US.",
        grade: "Grade A", tag: "Best Seller", icon: Icon.aio,
    },
    {
        id: 12, category: "Desktops", name: "HP EliteDesk 800 G6 SFF",
        tagline: "Small footprint, big enterprise performance.",
        spec: "Intel Core i5 | 8GB | 256GB SSD | Win 11 Pro",
        specs: { Processor:"Intel Core i5-10500", RAM:"8GB DDR4", Storage:"256GB NVMe SSD", OS:"Windows 11 Pro", Form:"Small Form Factor", Ports:"USB-A, USB-C, DisplayPort, HDMI", Grade:"A — Tested", Warranty:"90 days" },
        description: "HP EliteDesk 800 G6 SFF — enterprise-grade compact desktop ideal for office rollouts, call centres and educational institutions. Stocked in high volume.",
        grade: "Grade A", tag: "Bulk Deal", icon: Icon.tower,
    },
    {
        id: 13, category: "Desktops", name: "Lenovo ThinkCentre M720 Tower",
        tagline: "Expandable tower built for long-term deployments.",
        spec: "Intel Core i7 | 32GB | 1TB HDD + 256GB SSD",
        specs: { Processor:"Intel Core i7-8700", RAM:"32GB DDR4", Storage:"256GB SSD + 1TB HDD", OS:"Windows 10 Pro", Form:"Tower", Expansion:"PCIe x16, M.2, 3×3.5\" Bays", Grade:"B — Minor wear", Warranty:"60 days" },
        description: "Lenovo ThinkCentre M720 Tower with massive RAM and dual storage — ideal for workloads requiring power and expandability. Grade B cosmetic only, fully functional.",
        grade: "Grade B", tag: "", icon: Icon.tower,
    },
    {
        id: 14, category: "Components", name: "Samsung 870 EVO 1TB SSD",
        tagline: "Industry-leading SATA SSD for system upgrades.",
        spec: 'SATA 6Gb/s | 560 MB/s Read | 2.5"',
        specs: { Interface:"SATA 6Gb/s", ReadSpeed:"560 MB/s", WriteSpeed:"530 MB/s", Capacity:"1TB", FormFactor:'2.5"', NAND:"Samsung MKX V-NAND", Endurance:"600 TBW", Warranty:"5 years" },
        description: "Samsung 870 EVO 1TB — the gold standard for SATA SSD upgrades. Ideal for bulk system refreshes, refurbished laptop upgrades and IT deployments across the US.",
        grade: "", tag: "Best Seller", icon: Icon.ssd,
    },
    {
        id: 15, category: "Components", name: "Seagate Barracuda 2TB HDD",
        tagline: "Reliable high-capacity storage at bulk pricing.",
        spec: 'SATA 6Gb/s | 7200 RPM | 3.5" Internal',
        specs: { Interface:"SATA 6Gb/s", Capacity:"2TB", RPM:"7200 RPM", Cache:"256MB", FormFactor:'3.5" Internal', Endurance:"1,000,000 hours MTTF", Transfer:"220 MB/s", Warranty:"2 years" },
        description: "Seagate Barracuda 2TB — a trusted high-capacity HDD for desktops, NAS systems and archival storage. Available in large quantities for enterprise and institutional deployments.",
        grade: "", tag: "Bulk Deal", icon: Icon.hdd,
    },
    {
        id: 16, category: "Components", name: "NVIDIA GTX 1650 4GB GDDR6",
        tagline: "Entry-level GPU power for display and compute.",
        spec: "PCIe 3.0 | HDMI + DP + DVI | Low Profile",
        specs: { GPU:"NVIDIA GeForce GTX 1650", VRAM:"4GB GDDR6", Interface:"PCIe 3.0 x16", Outputs:"HDMI, DisplayPort, DVI", TDP:"75W (no external power)", Profile:"Low Profile available", Driver:"NVIDIA 500+ series", Warranty:"1 year" },
        description: "NVIDIA GTX 1650 with GDDR6 — perfect for multi-monitor office setups and light GPU compute. Low-profile variant available for SFF systems. Stocked in volume.",
        grade: "", tag: "New Arrival", icon: Icon.gpu,
    },
    {
        id: 17, category: "Components", name: "Crucial 16GB DDR4 RAM",
        tagline: "Plug-and-play memory upgrade for any system.",
        spec: "3200MHz | CL22 | Unbuffered | DIMM",
        specs: { Capacity:"16GB (1×16GB)", Speed:"DDR4-3200 MHz", Latency:"CL22", Type:"Unbuffered DIMM", Voltage:"1.2V", Compatibility:"Intel & AMD", ECC:"No", Warranty:"Lifetime" },
        description: "Crucial 16GB DDR4 3200MHz — reliable, high-compatibility RAM ideal for bulk system upgrades and builds. Sourced and stocked by NIBX for fast US delivery.",
        grade: "", tag: "", icon: Icon.ram,
    },
    {
        id: 18, category: "Accessories", name: "Logitech H390 USB Headset",
        tagline: "Noise-cancelling clarity for every call.",
        spec: "Noise-cancelling mic | USB-A | Inline controls",
        specs: { Driver:"40mm", Frequency:"20Hz–20kHz", Microphone:"Noise-cancelling, flexible boom", Connectivity:"USB-A", Controls:"Inline (volume, mute)", Cable:"2.5m", Padding:"Foam ear cups", Warranty:"2 years" },
        description: "Logitech H390 USB Headset — the go-to choice for call centres, remote workers and office deployments. Digital audio, noise-cancelling mic and easy USB plug-and-play. Available in bulk kits.",
        grade: "", tag: "Best Seller", icon: Icon.headset,
    },
    {
        id: 19, category: "Accessories", name: "Dell KM3322W Wireless Combo",
        tagline: "Wireless freedom for the modern workstation.",
        spec: "Keyboard + Mouse | 2.4GHz | USB Nano",
        specs: { Type:"Keyboard + Mouse Combo", Connectivity:"2.4GHz Wireless", Receiver:"USB Nano", KeyboardBattery:"Up to 36 months", MouseBattery:"Up to 36 months", DPI:"1000 dpi", Layout:"Full-size US Layout", Warranty:"1 year" },
        description: "Dell KM3322W wireless keyboard and mouse combo — reliable, long-battery life and minimal cable clutter. Ideal for office rollouts. Available in quantity bundles.",
        grade: "", tag: "Bulk Deal", icon: Icon.keyboard,
    },
    {
        id: 20, category: "Accessories", name: "Anker 10-Port USB 3.0 Hub",
        tagline: "Expand connectivity for any workstation setup.",
        spec: "7× USB-A 3.0 + 3× Charging | Power Adapter",
        specs: { USBPorts:"7× USB-A 3.0 (5Gbps)", ChargingPorts:"3× USB Charging (2.4A)", PowerSupply:"Included 60W adapter", Compatibility:"Win, macOS, Linux", Cable:"USB 3.0 Type-A, 2ft", Material:"Aluminium alloy", LEDs:"Yes — port status LEDs", Warranty:"18 months" },
        description: "Anker 10-port USB 3.0 hub — perfect for dense workstation setups requiring multiple peripherals. Powered hub with dedicated charging ports. Bulk orders welcome.",
        grade: "", tag: "", icon: Icon.hub,
    },
];

export const categoryList = ["All", "Laptops", "Monitors", "Printers", "Desktops", "Components", "Accessories"];
