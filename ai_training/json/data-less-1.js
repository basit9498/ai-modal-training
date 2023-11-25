const jsonIcd10code = [
  {
    icdCode: "A000",
    description: "Cholera due to Vibrio cholerae 01, biovar cholerae",
  },
  {
    icdCode: "A001",
    description: "Cholera due to Vibrio cholerae 01, biovar eltor",
  },
  {
    icdCode: "A009",
    description: "Cholera, unspecified",
  },
  {
    icdCode: "A0100",
    description: "Typhoid fever, unspecified",
  },
  {
    icdCode: "A0101",
    description: "Typhoid meningitis",
  },
  {
    icdCode: "A0102",
    description: "Typhoid fever with heart involvement",
  },
  {
    icdCode: "A0103",
    description: "Typhoid pneumonia",
  },
  {
    icdCode: "A0104",
    description: "Typhoid arthritis",
  },
  {
    icdCode: "A0105",
    description: "Typhoid osteomyelitis",
  },
  {
    icdCode: "A0109",
    description: "Typhoid fever with other complications",
  },
  {
    icdCode: "A011",
    description: "Paratyphoid fever A",
  },
  {
    icdCode: "A012",
    description: "Paratyphoid fever B",
  },
  {
    icdCode: "A013",
    description: "Paratyphoid fever C",
  },
  {
    icdCode: "A014",
    description: "Paratyphoid fever, unspecified",
  },
  {
    icdCode: "A020",
    description: "Salmonella enteritis",
  },
  {
    icdCode: "A021",
    description: "Salmonella sepsis",
  },
  {
    icdCode: "A0220",
    description: "Localized salmonella infection, unspecified",
  },
  {
    icdCode: "A0221",
    description: "Salmonella meningitis",
  },
  {
    icdCode: "A0222",
    description: "Salmonella pneumonia",
  },
  {
    icdCode: "A0223",
    description: "Salmonella arthritis",
  },
  {
    icdCode: "A0224",
    description: "Salmonella osteomyelitis",
  },
  {
    icdCode: "A0225",
    description: "Salmonella pyelonephritis",
  },
  {
    icdCode: "A0229",
    description: "Salmonella with other localized infection",
  },
  {
    icdCode: "A028",
    description: "Other specified salmonella infections",
  },
  {
    icdCode: "A029",
    description: "Salmonella infection, unspecified",
  },
  {
    icdCode: "A030",
    description: "Shigellosis due to Shigella dysenteriae",
  },
  {
    icdCode: "A031",
    description: "Shigellosis due to Shigella flexneri",
  },
  {
    icdCode: "A032",
    description: "Shigellosis due to Shigella boydii",
  },
  {
    icdCode: "A033",
    description: "Shigellosis due to Shigella sonnei",
  },
  {
    icdCode: "A038",
    description: "Other shigellosis",
  },
  {
    icdCode: "A039",
    description: "Shigellosis, unspecified",
  },
  {
    icdCode: "A040",
    description: "Enteropathogenic Escherichia coli infection",
  },
  {
    icdCode: "A041",
    description: "Enterotoxigenic Escherichia coli infection",
  },
  {
    icdCode: "A042",
    description: "Enteroinvasive Escherichia coli infection",
  },
  {
    icdCode: "A043",
    description: "Enterohemorrhagic Escherichia coli infection",
  },
  {
    icdCode: "A044",
    description: "Other intestinal Escherichia coli infections",
  },
  {
    icdCode: "A045",
    description: "Campylobacter enteritis",
  },
  {
    icdCode: "A046",
    description: "Enteritis due to Yersinia enterocolitica",
  },
  {
    icdCode: "A047",
    description: "Enterocolitis due to Clostridium difficile",
  },
  {
    icdCode: "A0471",
    description: "Enterocolitis due to Clostridium difficile, recurrent",
  },
  {
    icdCode: "A0472",
    description: "Enterocolitis d/t Clostridium difficile, not spcf as recur",
  },
  {
    icdCode: "A048",
    description: "Other specified bacterial intestinal infections",
  },
  {
    icdCode: "A049",
    description: "Bacterial intestinal infection, unspecified",
  },
  {
    icdCode: "A050",
    description: "Foodborne staphylococcal intoxication",
  },
  {
    icdCode: "A051",
    description: "Botulism food poisoning",
  },
  {
    icdCode: "A052",
    description: "Foodborne Clostridium perfringens intoxication",
  },
  {
    icdCode: "A053",
    description: "Foodborne Vibrio parahaemolyticus intoxication",
  },
  {
    icdCode: "A054",
    description: "Foodborne Bacillus cereus intoxication",
  },
  {
    icdCode: "A055",
    description: "Foodborne Vibrio vulnificus intoxication",
  },
  {
    icdCode: "A058",
    description: "Other specified bacterial foodborne intoxications",
  },
  {
    icdCode: "A059",
    description: "Bacterial foodborne intoxication, unspecified",
  },
  {
    icdCode: "A060",
    description: "Acute amebic dysentery",
  },
  {
    icdCode: "A061",
    description: "Chronic intestinal amebiasis",
  },
  {
    icdCode: "A062",
    description: "Amebic nondysenteric colitis",
  },
  {
    icdCode: "A063",
    description: "Ameboma of intestine",
  },
  {
    icdCode: "A064",
    description: "Amebic liver abscess",
  },
  {
    icdCode: "A065",
    description: "Amebic lung abscess",
  },
  {
    icdCode: "A066",
    description: "Amebic brain abscess",
  },
  {
    icdCode: "A067",
    description: "Cutaneous amebiasis",
  },
  {
    icdCode: "A0681",
    description: "Amebic cystitis",
  },
  {
    icdCode: "A0682",
    description: "Other amebic genitourinary infections",
  },
  {
    icdCode: "A0689",
    description: "Other amebic infections",
  },
  {
    icdCode: "A069",
    description: "Amebiasis, unspecified",
  },
  {
    icdCode: "A070",
    description: "Balantidiasis",
  },
  {
    icdCode: "A071",
    description: "Giardiasis [lambliasis]",
  },
  {
    icdCode: "A072",
    description: "Cryptosporidiosis",
  },
  {
    icdCode: "A073",
    description: "Isosporiasis",
  },
  {
    icdCode: "A074",
    description: "Cyclosporiasis",
  },
  {
    icdCode: "A078",
    description: "Other specified protozoal intestinal diseases",
  },
  {
    icdCode: "A079",
    description: "Protozoal intestinal disease, unspecified",
  },
  {
    icdCode: "A080",
    description: "Rotaviral enteritis",
  },
  {
    icdCode: "A0811",
    description: "Acute gastroenteropathy due to Norwalk agent",
  },
  {
    icdCode: "A0819",
    description: "Acute gastroenteropathy due to other small round viruses",
  },
  {
    icdCode: "A082",
    description: "Adenoviral enteritis",
  },
  {
    icdCode: "A0831",
    description: "Calicivirus enteritis",
  },
  {
    icdCode: "A0832",
    description: "Astrovirus enteritis",
  },
  {
    icdCode: "A0839",
    description: "Other viral enteritis",
  },
  {
    icdCode: "A084",
    description: "Viral intestinal infection, unspecified",
  },
  {
    icdCode: "A088",
    description: "Other specified intestinal infections",
  },
  {
    icdCode: "A09",
    description: "Infectious gastroenteritis and colitis, unspecified",
  },
  {
    icdCode: "A150",
    description: "Tuberculosis of lung",
  },
  {
    icdCode: "A154",
    description: "Tuberculosis of intrathoracic lymph nodes",
  },
  {
    icdCode: "A155",
    description: "Tuberculosis of larynx, trachea and bronchus",
  },
  {
    icdCode: "A156",
    description: "Tuberculous pleurisy",
  },
  {
    icdCode: "A157",
    description: "Primary respiratory tuberculosis",
  },
  {
    icdCode: "A158",
    description: "Other respiratory tuberculosis",
  },
  {
    icdCode: "A159",
    description: "Respiratory tuberculosis unspecified",
  },
  {
    icdCode: "A170",
    description: "Tuberculous meningitis",
  },
  {
    icdCode: "A171",
    description: "Meningeal tuberculoma",
  },
  {
    icdCode: "A1781",
    description: "Tuberculoma of brain and spinal cord",
  },
  {
    icdCode: "A1782",
    description: "Tuberculous meningoencephalitis",
  },
  {
    icdCode: "A1783",
    description: "Tuberculous neuritis",
  },
  {
    icdCode: "A1789",
    description: "Other tuberculosis of nervous system",
  },
  {
    icdCode: "A179",
    description: "Tuberculosis of nervous system, unspecified",
  },
  {
    icdCode: "A1801",
    description: "Tuberculosis of spine",
  },
  {
    icdCode: "A1802",
    description: "Tuberculous arthritis of other joints",
  },
  {
    icdCode: "A1803",
    description: "Tuberculosis of other bones",
  },
  {
    icdCode: "A1809",
    description: "Other musculoskeletal tuberculosis",
  },
  {
    icdCode: "A1810",
    description: "Tuberculosis of genitourinary system, unspecified",
  },
  {
    icdCode: "A1811",
    description: "Tuberculosis of kidney and ureter",
  },
  {
    icdCode: "A1812",
    description: "Tuberculosis of bladder",
  },
  {
    icdCode: "A1813",
    description: "Tuberculosis of other urinary organs",
  },
  {
    icdCode: "A1814",
    description: "Tuberculosis of prostate",
  },
  {
    icdCode: "A1815",
    description: "Tuberculosis of other male genital organs",
  },
  {
    icdCode: "A1816",
    description: "Tuberculosis of cervix",
  },
  {
    icdCode: "A1817",
    description: "Tuberculous female pelvic inflammatory disease",
  },
  {
    icdCode: "A1818",
    description: "Tuberculosis of other female genital organs",
  },
  {
    icdCode: "A182",
    description: "Tuberculous peripheral lymphadenopathy",
  },
  {
    icdCode: "A1831",
    description: "Tuberculous peritonitis",
  },
  {
    icdCode: "A1832",
    description: "Tuberculous enteritis",
  },
  {
    icdCode: "A1839",
    description: "Retroperitoneal tuberculosis",
  },
  {
    icdCode: "A184",
    description: "Tuberculosis of skin and subcutaneous tissue",
  },
  {
    icdCode: "A1850",
    description: "Tuberculosis of eye, unspecified",
  },
  {
    icdCode: "A1851",
    description: "Tuberculous episcleritis",
  },
  {
    icdCode: "A1852",
    description: "Tuberculous keratitis",
  },
  {
    icdCode: "A1853",
    description: "Tuberculous chorioretinitis",
  },
  {
    icdCode: "A1854",
    description: "Tuberculous iridocyclitis",
  },
  {
    icdCode: "A1859",
    description: "Other tuberculosis of eye",
  },
  {
    icdCode: "A186",
    description: "Tuberculosis of (inner) (middle) ear",
  },
  {
    icdCode: "A187",
    description: "Tuberculosis of adrenal glands",
  },
  {
    icdCode: "A1881",
    description: "Tuberculosis of thyroid gland",
  },
  {
    icdCode: "A1882",
    description: "Tuberculosis of other endocrine glands",
  },
  {
    icdCode: "A1883",
    description: "Tuberculosis of digestive tract organs, NEC",
  },
  {
    icdCode: "A1884",
    description: "Tuberculosis of heart",
  },
  {
    icdCode: "A1885",
    description: "Tuberculosis of spleen",
  },
  {
    icdCode: "A1889",
    description: "Tuberculosis of other sites",
  },
  {
    icdCode: "A190",
    description: "Acute miliary tuberculosis of a single specified site",
  },
  {
    icdCode: "A191",
    description: "Acute miliary tuberculosis of multiple sites",
  },
  {
    icdCode: "A192",
    description: "Acute miliary tuberculosis, unspecified",
  },
  {
    icdCode: "A198",
    description: "Other miliary tuberculosis",
  },
  {
    icdCode: "A199",
    description: "Miliary tuberculosis, unspecified",
  },
  {
    icdCode: "A200",
    description: "Bubonic plague",
  },
  {
    icdCode: "A201",
    description: "Cellulocutaneous plague",
  },
  {
    icdCode: "A202",
    description: "Pneumonic plague",
  },
  {
    icdCode: "A203",
    description: "Plague meningitis",
  },
  {
    icdCode: "A207",
    description: "Septicemic plague",
  },
  {
    icdCode: "A208",
    description: "Other forms of plague",
  },
  {
    icdCode: "A209",
    description: "Plague, unspecified",
  },
  {
    icdCode: "A210",
    description: "Ulceroglandular tularemia",
  },
  {
    icdCode: "A211",
    description: "Oculoglandular tularemia",
  },
  {
    icdCode: "A212",
    description: "Pulmonary tularemia",
  },
  {
    icdCode: "A213",
    description: "Gastrointestinal tularemia",
  },
  {
    icdCode: "A217",
    description: "Generalized tularemia",
  },
  {
    icdCode: "A218",
    description: "Other forms of tularemia",
  },
  {
    icdCode: "A219",
    description: "Tularemia, unspecified",
  },
  {
    icdCode: "A220",
    description: "Cutaneous anthrax",
  },
  {
    icdCode: "A221",
    description: "Pulmonary anthrax",
  },
  {
    icdCode: "A222",
    description: "Gastrointestinal anthrax",
  },
  {
    icdCode: "A227",
    description: "Anthrax sepsis",
  },
  {
    icdCode: "A228",
    description: "Other forms of anthrax",
  },
  {
    icdCode: "A229",
    description: "Anthrax, unspecified",
  },
  {
    icdCode: "A230",
    description: "Brucellosis due to Brucella melitensis",
  },
  {
    icdCode: "A231",
    description: "Brucellosis due to Brucella abortus",
  },
  {
    icdCode: "A232",
    description: "Brucellosis due to Brucella suis",
  },
  {
    icdCode: "A233",
    description: "Brucellosis due to Brucella canis",
  },
  {
    icdCode: "A238",
    description: "Other brucellosis",
  },
  {
    icdCode: "A239",
    description: "Brucellosis, unspecified",
  },
  {
    icdCode: "A240",
    description: "Glanders",
  },
  {
    icdCode: "A241",
    description: "Acute and fulminating melioidosis",
  },
  {
    icdCode: "A242",
    description: "Subacute and chronic melioidosis",
  },
  {
    icdCode: "A243",
    description: "Other melioidosis",
  },
  {
    icdCode: "A249",
    description: "Melioidosis, unspecified",
  },
  {
    icdCode: "A250",
    description: "Spirillosis",
  },
  {
    icdCode: "A251",
    description: "Streptobacillosis",
  },
  {
    icdCode: "A259",
    description: "Rat-bite fever, unspecified",
  },
  {
    icdCode: "A260",
    description: "Cutaneous erysipeloid",
  },
  {
    icdCode: "A267",
    description: "Erysipelothrix sepsis",
  },
  {
    icdCode: "A268",
    description: "Other forms of erysipeloid",
  },
  {
    icdCode: "A269",
    description: "Erysipeloid, unspecified",
  },
  {
    icdCode: "A270",
    description: "Leptospirosis icterohemorrhagica",
  },
  {
    icdCode: "A2781",
    description: "Aseptic meningitis in leptospirosis",
  },
  {
    icdCode: "A2789",
    description: "Other forms of leptospirosis",
  },
  {
    icdCode: "A279",
    description: "Leptospirosis, unspecified",
  },
  {
    icdCode: "A280",
    description: "Pasteurellosis",
  },
  {
    icdCode: "A281",
    description: "Cat-scratch disease",
  },
  {
    icdCode: "A282",
    description: "Extraintestinal yersiniosis",
  },
  {
    icdCode: "A288",
    description: "Oth zoonotic bacterial diseases, not elsewhere classified",
  },
  {
    icdCode: "A289",
    description: "Zoonotic bacterial disease, unspecified",
  },
  {
    icdCode: "A300",
    description: "Indeterminate leprosy",
  },
  {
    icdCode: "A301",
    description: "Tuberculoid leprosy",
  },
  {
    icdCode: "A302",
    description: "Borderline tuberculoid leprosy",
  },
  {
    icdCode: "A303",
    description: "Borderline leprosy",
  },
  {
    icdCode: "A304",
    description: "Borderline lepromatous leprosy",
  },
  {
    icdCode: "A305",
    description: "Lepromatous leprosy",
  },
  {
    icdCode: "A308",
    description: "Other forms of leprosy",
  },
  {
    icdCode: "A309",
    description: "Leprosy, unspecified",
  },
  {
    icdCode: "A310",
    description: "Pulmonary mycobacterial infection",
  },
  {
    icdCode: "A311",
    description: "Cutaneous mycobacterial infection",
  },
  {
    icdCode: "A312",
    description: "Dissem mycobacterium avium-intracellulare complex (DMAC)",
  },
  {
    icdCode: "A318",
    description: "Other mycobacterial infections",
  },
  {
    icdCode: "A319",
    description: "Mycobacterial infection, unspecified",
  },
  {
    icdCode: "A320",
    description: "Cutaneous listeriosis",
  },
  {
    icdCode: "A3211",
    description: "Listerial meningitis",
  },
  {
    icdCode: "A3212",
    description: "Listerial meningoencephalitis",
  },
  {
    icdCode: "A327",
    description: "Listerial sepsis",
  },
  {
    icdCode: "A3281",
    description: "Oculoglandular listeriosis",
  },
  {
    icdCode: "A3282",
    description: "Listerial endocarditis",
  },
  {
    icdCode: "A3289",
    description: "Other forms of listeriosis",
  },
  {
    icdCode: "A329",
    description: "Listeriosis, unspecified",
  },
  {
    icdCode: "A33",
    description: "Tetanus neonatorum",
  },
  {
    icdCode: "A34",
    description: "Obstetrical tetanus",
  },
  {
    icdCode: "A35",
    description: "Other tetanus",
  },
  {
    icdCode: "A360",
    description: "Pharyngeal diphtheria",
  },
  {
    icdCode: "A361",
    description: "Nasopharyngeal diphtheria",
  },
  {
    icdCode: "A362",
    description: "Laryngeal diphtheria",
  },
  {
    icdCode: "A363",
    description: "Cutaneous diphtheria",
  },
  {
    icdCode: "A3681",
    description: "Diphtheritic cardiomyopathy",
  },
  {
    icdCode: "A3682",
    description: "Diphtheritic radiculomyelitis",
  },
  {
    icdCode: "A3683",
    description: "Diphtheritic polyneuritis",
  },
  {
    icdCode: "A3684",
    description: "Diphtheritic tubulo-interstitial nephropathy",
  },
  {
    icdCode: "A3685",
    description: "Diphtheritic cystitis",
  },
  {
    icdCode: "A3686",
    description: "Diphtheritic conjunctivitis",
  },
  {
    icdCode: "A3689",
    description: "Other diphtheritic complications",
  },
  {
    icdCode: "A369",
    description: "Diphtheria, unspecified",
  },
  {
    icdCode: "A3700",
    description: "Whooping cough due to Bordetella pertussis without pneumonia",
  },
  {
    icdCode: "A3701",
    description: "Whooping cough due to Bordetella pertussis with pneumonia",
  },
  {
    icdCode: "A3710",
    description: "Whooping cough due to Bordetella parapertussis w/o pneumonia",
  },
  {
    icdCode: "A3711",
    description: "Whooping cough due to Bordetella parapertussis w pneumonia",
  },
  {
    icdCode: "A3780",
    description: "Whooping cough due to other Bordetella species w/o pneumonia",
  },
  {
    icdCode: "A3781",
    description: "Whooping cough due to oth Bordetella species with pneumonia",
  },
  {
    icdCode: "A3790",
    description: "Whooping cough, unspecified species without pneumonia",
  },
  {
    icdCode: "A3791",
    description: "Whooping cough, unspecified species with pneumonia",
  },
  {
    icdCode: "A380",
    description: "Scarlet fever with otitis media",
  },
  {
    icdCode: "A381",
    description: "Scarlet fever with myocarditis",
  },
  {
    icdCode: "A388",
    description: "Scarlet fever with other complications",
  },
  {
    icdCode: "A389",
    description: "Scarlet fever, uncomplicated",
  },
  {
    icdCode: "A390",
    description: "Meningococcal meningitis",
  },
  {
    icdCode: "A391",
    description: "Waterhouse-Friderichsen syndrome",
  },
  {
    icdCode: "A392",
    description: "Acute meningococcemia",
  },
  {
    icdCode: "A393",
    description: "Chronic meningococcemia",
  },
  {
    icdCode: "A394",
    description: "Meningococcemia, unspecified",
  },
  {
    icdCode: "A3950",
    description: "Meningococcal carditis, unspecified",
  },
  {
    icdCode: "A3951",
    description: "Meningococcal endocarditis",
  },
  {
    icdCode: "A3952",
    description: "Meningococcal myocarditis",
  },
  {
    icdCode: "A3953",
    description: "Meningococcal pericarditis",
  },
  {
    icdCode: "A3981",
    description: "Meningococcal encephalitis",
  },
  {
    icdCode: "A3982",
    description: "Meningococcal retrobulbar neuritis",
  },
  {
    icdCode: "A3983",
    description: "Meningococcal arthritis",
  },
  {
    icdCode: "A3984",
    description: "Postmeningococcal arthritis",
  },
  {
    icdCode: "A3989",
    description: "Other meningococcal infections",
  },
  {
    icdCode: "A399",
    description: "Meningococcal infection, unspecified",
  },
  {
    icdCode: "A400",
    description: "Sepsis due to streptococcus, group A",
  },
  {
    icdCode: "A401",
    description: "Sepsis due to streptococcus, group B",
  },
  {
    icdCode: "A403",
    description: "Sepsis due to Streptococcus pneumoniae",
  },
  {
    icdCode: "A408",
    description: "Other streptococcal sepsis",
  },
  {
    icdCode: "A409",
    description: "Streptococcal sepsis, unspecified",
  },
  {
    icdCode: "A4101",
    description: "Sepsis due to Methicillin susceptible Staphylococcus aureus",
  },
  {
    icdCode: "A4102",
    description: "Sepsis due to Methicillin resistant Staphylococcus aureus",
  },
  {
    icdCode: "A411",
    description: "Sepsis due to other specified staphylococcus",
  },
  {
    icdCode: "A412",
    description: "Sepsis due to unspecified staphylococcus",
  },
  {
    icdCode: "A413",
    description: "Sepsis due to Hemophilus influenzae",
  },
  {
    icdCode: "A414",
    description: "Sepsis due to anaerobes",
  },
  {
    icdCode: "A4150",
    description: "Gram-negative sepsis, unspecified",
  },
  {
    icdCode: "A4151",
    description: "Sepsis due to Escherichia coli [E. coli]",
  },
  {
    icdCode: "A4152",
    description: "Sepsis due to Pseudomonas",
  },
  {
    icdCode: "A4153",
    description: "Sepsis due to Serratia",
  },
  {
    icdCode: "A4154",
    description: "Sepsis due to Acinetobacter baumannii",
  },
  {
    icdCode: "A4159",
    description: "Other Gram-negative sepsis",
  },
  {
    icdCode: "A4181",
    description: "Sepsis due to Enterococcus",
  },
  {
    icdCode: "A4189",
    description: "Other specified sepsis",
  },
  {
    icdCode: "A419",
    description: "Sepsis, unspecified organism",
  },
  {
    icdCode: "A420",
    description: "Pulmonary actinomycosis",
  },
  {
    icdCode: "A421",
    description: "Abdominal actinomycosis",
  },
  {
    icdCode: "A422",
    description: "Cervicofacial actinomycosis",
  },
  {
    icdCode: "A427",
    description: "Actinomycotic sepsis",
  },
  {
    icdCode: "A4281",
    description: "Actinomycotic meningitis",
  },
  {
    icdCode: "A4282",
    description: "Actinomycotic encephalitis",
  },
  {
    icdCode: "A4289",
    description: "Other forms of actinomycosis",
  },
  {
    icdCode: "A429",
    description: "Actinomycosis, unspecified",
  },
  {
    icdCode: "A430",
    description: "Pulmonary nocardiosis",
  },
  {
    icdCode: "A431",
    description: "Cutaneous nocardiosis",
  },
  {
    icdCode: "A438",
    description: "Other forms of nocardiosis",
  },
  {
    icdCode: "A439",
    description: "Nocardiosis, unspecified",
  },
  {
    icdCode: "A440",
    description: "Systemic bartonellosis",
  },
  {
    icdCode: "A441",
    description: "Cutaneous and mucocutaneous bartonellosis",
  },
  {
    icdCode: "A448",
    description: "Other forms of bartonellosis",
  },
  {
    icdCode: "A449",
    description: "Bartonellosis, unspecified",
  },
  {
    icdCode: "A46",
    description: "Erysipelas",
  },
  {
    icdCode: "A480",
    description: "Gas gangrene",
  },
  {
    icdCode: "A481",
    description: "Legionnaires' disease",
  },
  {
    icdCode: "A482",
    description: "Nonpneumonic Legionnaires' disease [Pontiac fever]",
  },
  {
    icdCode: "A483",
    description: "Toxic shock syndrome",
  },
  {
    icdCode: "A484",
    description: "Brazilian purpuric fever",
  },
  {
    icdCode: "A4851",
    description: "Infant botulism",
  },
  {
    icdCode: "A4852",
    description: "Wound botulism",
  },
  {
    icdCode: "A488",
    description: "Other specified bacterial diseases",
  },
  {
    icdCode: "A4901",
    description: "Methicillin suscep staph infection, unsp site",
  },
  {
    icdCode: "A4902",
    description: "Methicillin resis staph infection, unsp site",
  },
  {
    icdCode: "A491",
    description: "Streptococcal infection, unspecified site",
  },
  {
    icdCode: "A492",
    description: "Hemophilus influenzae infection, unspecified site",
  },
  {
    icdCode: "A493",
    description: "Mycoplasma infection, unspecified site",
  },
  {
    icdCode: "A498",
    description: "Other bacterial infections of unspecified site",
  },
  {
    icdCode: "A499",
    description: "Bacterial infection, unspecified",
  },
  {
    icdCode: "A5001",
    description: "Early congenital syphilitic oculopathy",
  },
  {
    icdCode: "A5002",
    description: "Early congenital syphilitic osteochondropathy",
  },
  {
    icdCode: "A5003",
    description: "Early congenital syphilitic pharyngitis",
  },
  {
    icdCode: "A5004",
    description: "Early congenital syphilitic pneumonia",
  },
  {
    icdCode: "A5005",
    description: "Early congenital syphilitic rhinitis",
  },
  {
    icdCode: "A5006",
    description: "Early cutaneous congenital syphilis",
  },
  {
    icdCode: "A5007",
    description: "Early mucocutaneous congenital syphilis",
  },
  {
    icdCode: "A5008",
    description: "Early visceral congenital syphilis",
  },
  {
    icdCode: "A5009",
    description: "Other early congenital syphilis, symptomatic",
  },
  {
    icdCode: "A501",
    description: "Early congenital syphilis, latent",
  },
  {
    icdCode: "A502",
    description: "Early congenital syphilis, unspecified",
  },
  {
    icdCode: "A5030",
    description: "Late congenital syphilitic oculopathy, unspecified",
  },
  {
    icdCode: "A5031",
    description: "Late congenital syphilitic interstitial keratitis",
  },
  {
    icdCode: "A5032",
    description: "Late congenital syphilitic chorioretinitis",
  },
  {
    icdCode: "A5039",
    description: "Other late congenital syphilitic oculopathy",
  },
  {
    icdCode: "A5040",
    description: "Late congenital neurosyphilis, unspecified",
  },
  {
    icdCode: "A5041",
    description: "Late congenital syphilitic meningitis",
  },
  {
    icdCode: "A5042",
    description: "Late congenital syphilitic encephalitis",
  },
  {
    icdCode: "A5043",
    description: "Late congenital syphilitic polyneuropathy",
  },
  {
    icdCode: "A5044",
    description: "Late congenital syphilitic optic nerve atrophy",
  },
  {
    icdCode: "A5045",
    description: "Juvenile general paresis",
  },
  {
    icdCode: "A5049",
    description: "Other late congenital neurosyphilis",
  },
  {
    icdCode: "A5051",
    description: "Clutton's joints",
  },
  {
    icdCode: "A5052",
    description: "Hutchinson's teeth",
  },
  {
    icdCode: "A5053",
    description: "Hutchinson's triad",
  },
  {
    icdCode: "A5054",
    description: "Late congenital cardiovascular syphilis",
  },
  {
    icdCode: "A5055",
    description: "Late congenital syphilitic arthropathy",
  },
  {
    icdCode: "A5056",
    description: "Late congenital syphilitic osteochondropathy",
  },
  {
    icdCode: "A5057",
    description: "Syphilitic saddle nose",
  },
  {
    icdCode: "A5059",
    description: "Other late congenital syphilis, symptomatic",
  },
  {
    icdCode: "A506",
    description: "Late congenital syphilis, latent",
  },
  {
    icdCode: "A507",
    description: "Late congenital syphilis, unspecified",
  },
  {
    icdCode: "A509",
    description: "Congenital syphilis, unspecified",
  },
  {
    icdCode: "A510",
    description: "Primary genital syphilis",
  },
  {
    icdCode: "A511",
    description: "Primary anal syphilis",
  },
  {
    icdCode: "A512",
    description: "Primary syphilis of other sites",
  },
  {
    icdCode: "A5131",
    description: "Condyloma latum",
  },
  {
    icdCode: "A5132",
    description: "Syphilitic alopecia",
  },
  {
    icdCode: "A5139",
    description: "Other secondary syphilis of skin",
  },
  {
    icdCode: "A5141",
    description: "Secondary syphilitic meningitis",
  },
  {
    icdCode: "A5142",
    description: "Secondary syphilitic female pelvic disease",
  },
  {
    icdCode: "A5143",
    description: "Secondary syphilitic oculopathy",
  },
  {
    icdCode: "A5144",
    description: "Secondary syphilitic nephritis",
  },
  {
    icdCode: "A5145",
    description: "Secondary syphilitic hepatitis",
  },
  {
    icdCode: "A5146",
    description: "Secondary syphilitic osteopathy",
  },
  {
    icdCode: "A5149",
    description: "Other secondary syphilitic conditions",
  },
  {
    icdCode: "A515",
    description: "Early syphilis, latent",
  },
  {
    icdCode: "A519",
    description: "Early syphilis, unspecified",
  },
  {
    icdCode: "A5200",
    description: "Cardiovascular syphilis, unspecified",
  },
  {
    icdCode: "A5201",
    description: "Syphilitic aneurysm of aorta",
  },
  {
    icdCode: "A5202",
    description: "Syphilitic aortitis",
  },
  {
    icdCode: "A5203",
    description: "Syphilitic endocarditis",
  },
  {
    icdCode: "A5204",
    description: "Syphilitic cerebral arteritis",
  },
  {
    icdCode: "A5205",
    description: "Other cerebrovascular syphilis",
  },
  {
    icdCode: "A5206",
    description: "Other syphilitic heart involvement",
  },
  {
    icdCode: "A5209",
    description: "Other cardiovascular syphilis",
  },
  {
    icdCode: "A5210",
    description: "Symptomatic neurosyphilis, unspecified",
  },
  {
    icdCode: "A5211",
    description: "Tabes dorsalis",
  },
  {
    icdCode: "A5212",
    description: "Other cerebrospinal syphilis",
  },
  {
    icdCode: "A5213",
    description: "Late syphilitic meningitis",
  },
  {
    icdCode: "A5214",
    description: "Late syphilitic encephalitis",
  },
  {
    icdCode: "A5215",
    description: "Late syphilitic neuropathy",
  },
  {
    icdCode: "A5216",
    description: "Charcot's arthropathy (tabetic)",
  },
  {
    icdCode: "A5217",
    description: "General paresis",
  },
  {
    icdCode: "A5219",
    description: "Other symptomatic neurosyphilis",
  },
  {
    icdCode: "A522",
    description: "Asymptomatic neurosyphilis",
  },
  {
    icdCode: "A523",
    description: "Neurosyphilis, unspecified",
  },
  {
    icdCode: "A5271",
    description: "Late syphilitic oculopathy",
  },
  {
    icdCode: "A5272",
    description: "Syphilis of lung and bronchus",
  },
  {
    icdCode: "A5273",
    description: "Symptomatic late syphilis of other respiratory organs",
  },
  {
    icdCode: "A5274",
    description: "Syphilis of liver and other viscera",
  },
  {
    icdCode: "A5275",
    description: "Syphilis of kidney and ureter",
  },
  {
    icdCode: "A5276",
    description: "Other genitourinary symptomatic late syphilis",
  },
  {
    icdCode: "A5277",
    description: "Syphilis of bone and joint",
  },
  {
    icdCode: "A5278",
    description: "Syphilis of other musculoskeletal tissue",
  },
  {
    icdCode: "A5279",
    description: "Other symptomatic late syphilis",
  },
  {
    icdCode: "A528",
    description: "Late syphilis, latent",
  },
  {
    icdCode: "A529",
    description: "Late syphilis, unspecified",
  },
  {
    icdCode: "A530",
    description: "Latent syphilis, unspecified as early or late",
  },
  {
    icdCode: "A539",
    description: "Syphilis, unspecified",
  },
  {
    icdCode: "A5400",
    description: "Gonococcal infection of lower genitourinary tract, unsp",
  },
  {
    icdCode: "A5401",
    description: "Gonococcal cystitis and urethritis, unspecified",
  },
  {
    icdCode: "A5402",
    description: "Gonococcal vulvovaginitis, unspecified",
  },
  {
    icdCode: "A5403",
    description: "Gonococcal cervicitis, unspecified",
  },
  {
    icdCode: "A5409",
    description: "Other gonococcal infection of lower genitourinary tract",
  },
  {
    icdCode: "A541",
    description: "Gonocl infct of lower GU tract w periureth and acc glnd abcs",
  },
  {
    icdCode: "A5421",
    description: "Gonococcal infection of kidney and ureter",
  },
  {
    icdCode: "A5422",
    description: "Gonococcal prostatitis",
  },
  {
    icdCode: "A5423",
    description: "Gonococcal infection of other male genital organs",
  },
  {
    icdCode: "A5424",
    description: "Gonococcal female pelvic inflammatory disease",
  },
  {
    icdCode: "A5429",
    description: "Other gonococcal genitourinary infections",
  },
  {
    icdCode: "A5430",
    description: "Gonococcal infection of eye, unspecified",
  },
  {
    icdCode: "A5431",
    description: "Gonococcal conjunctivitis",
  },
  {
    icdCode: "A5432",
    description: "Gonococcal iridocyclitis",
  },
  {
    icdCode: "A5433",
    description: "Gonococcal keratitis",
  },
  {
    icdCode: "A5439",
    description: "Other gonococcal eye infection",
  },
  {
    icdCode: "A5440",
    description: "Gonococcal infection of musculoskeletal system, unspecified",
  },
  {
    icdCode: "A5441",
    description: "Gonococcal spondylopathy",
  },
  {
    icdCode: "A5442",
    description: "Gonococcal arthritis",
  },
  {
    icdCode: "A5443",
    description: "Gonococcal osteomyelitis",
  },
  {
    icdCode: "A5449",
    description: "Gonococcal infection of other musculoskeletal tissue",
  },
  {
    icdCode: "A545",
    description: "Gonococcal pharyngitis",
  },
  {
    icdCode: "A546",
    description: "Gonococcal infection of anus and rectum",
  },
  {
    icdCode: "A5481",
    description: "Gonococcal meningitis",
  },
  {
    icdCode: "A5482",
    description: "Gonococcal brain abscess",
  },
  {
    icdCode: "A5483",
    description: "Gonococcal heart infection",
  },
  {
    icdCode: "A5484",
    description: "Gonococcal pneumonia",
  },
  {
    icdCode: "A5485",
    description: "Gonococcal peritonitis",
  },
  {
    icdCode: "A5486",
    description: "Gonococcal sepsis",
  },
  {
    icdCode: "A5489",
    description: "Other gonococcal infections",
  },
  {
    icdCode: "A549",
    description: "Gonococcal infection, unspecified",
  },
  {
    icdCode: "A55",
    description: "Chlamydial lymphogranuloma (venereum)",
  },
  {
    icdCode: "A5600",
    description: "Chlamydial infection of lower genitourinary tract, unsp",
  },
  {
    icdCode: "A5601",
    description: "Chlamydial cystitis and urethritis",
  },
  {
    icdCode: "A5602",
    description: "Chlamydial vulvovaginitis",
  },
  {
    icdCode: "A5609",
    description: "Other chlamydial infection of lower genitourinary tract",
  },
  {
    icdCode: "A5611",
    description: "Chlamydial female pelvic inflammatory disease",
  },
  {
    icdCode: "A5619",
    description: "Other chlamydial genitourinary infection",
  },
  {
    icdCode: "A562",
    description: "Chlamydial infection of genitourinary tract, unspecified",
  },
  {
    icdCode: "A563",
    description: "Chlamydial infection of anus and rectum",
  },
  {
    icdCode: "A564",
    description: "Chlamydial infection of pharynx",
  },
  {
    icdCode: "A568",
    description: "Sexually transmitted chlamydial infection of other sites",
  },
  {
    icdCode: "A57",
    description: "Chancroid",
  },
  {
    icdCode: "A58",
    description: "Granuloma inguinale",
  },
  {
    icdCode: "A5900",
    description: "Urogenital trichomoniasis, unspecified",
  },
  {
    icdCode: "A5901",
    description: "Trichomonal vulvovaginitis",
  },
  {
    icdCode: "A5902",
    description: "Trichomonal prostatitis",
  },
  {
    icdCode: "A5903",
    description: "Trichomonal cystitis and urethritis",
  },
  {
    icdCode: "A5909",
    description: "Other urogenital trichomoniasis",
  },
  {
    icdCode: "A598",
    description: "Trichomoniasis of other sites",
  },
  {
    icdCode: "A599",
    description: "Trichomoniasis, unspecified",
  },
  {
    icdCode: "A6000",
    description: "Herpesviral infection of urogenital system, unspecified",
  },
  {
    icdCode: "A6001",
    description: "Herpesviral infection of penis",
  },
  {
    icdCode: "A6002",
    description: "Herpesviral infection of other male genital organs",
  },
  {
    icdCode: "A6003",
    description: "Herpesviral cervicitis",
  },
  {
    icdCode: "A6004",
    description: "Herpesviral vulvovaginitis",
  },
  {
    icdCode: "A6009",
    description: "Herpesviral infection of other urogenital tract",
  },
  {
    icdCode: "A601",
    description: "Herpesviral infection of perianal skin and rectum",
  },
  {
    icdCode: "A609",
    description: "Anogenital herpesviral infection, unspecified",
  },
  {
    icdCode: "A630",
    description: "Anogenital (venereal) warts",
  },
  {
    icdCode: "A638",
    description: "Other specified predominantly sexually transmitted diseases",
  },
  {
    icdCode: "A64",
    description: "Unspecified sexually transmitted disease",
  },
  {
    icdCode: "A65",
    description: "Nonvenereal syphilis",
  },
  {
    icdCode: "A660",
    description: "Initial lesions of yaws",
  },
  {
    icdCode: "A661",
    description: "Multiple papillomata and wet crab yaws",
  },
  {
    icdCode: "A662",
    description: "Other early skin lesions of yaws",
  },
  {
    icdCode: "A663",
    description: "Hyperkeratosis of yaws",
  },
  {
    icdCode: "A664",
    description: "Gummata and ulcers of yaws",
  },
  {
    icdCode: "A665",
    description: "Gangosa",
  },
  {
    icdCode: "A666",
    description: "Bone and joint lesions of yaws",
  },
  {
    icdCode: "A667",
    description: "Other manifestations of yaws",
  },
  {
    icdCode: "A668",
    description: "Latent yaws",
  },
  {
    icdCode: "A669",
    description: "Yaws, unspecified",
  },
  {
    icdCode: "A670",
    description: "Primary lesions of pinta",
  },
  {
    icdCode: "A671",
    description: "Intermediate lesions of pinta",
  },
  {
    icdCode: "A672",
    description: "Late lesions of pinta",
  },
  {
    icdCode: "A673",
    description: "Mixed lesions of pinta",
  },
  {
    icdCode: "A679",
    description: "Pinta, unspecified",
  },
  {
    icdCode: "A680",
    description: "Louse-borne relapsing fever",
  },
  {
    icdCode: "A681",
    description: "Tick-borne relapsing fever",
  },
  {
    icdCode: "A689",
    description: "Relapsing fever, unspecified",
  },
  {
    icdCode: "A690",
    description: "Necrotizing ulcerative stomatitis",
  },
  {
    icdCode: "A691",
    description: "Other Vincent's infections",
  },
  {
    icdCode: "A6920",
    description: "Lyme disease, unspecified",
  },
  {
    icdCode: "A6921",
    description: "Meningitis due to Lyme disease",
  },
  {
    icdCode: "A6922",
    description: "Other neurologic disorders in Lyme disease",
  },
  {
    icdCode: "A6923",
    description: "Arthritis due to Lyme disease",
  },
  {
    icdCode: "A6929",
    description: "Other conditions associated with Lyme disease",
  },
  {
    icdCode: "A698",
    description: "Other specified spirochetal infections",
  },
  {
    icdCode: "A699",
    description: "Spirochetal infection, unspecified",
  },
  {
    icdCode: "A70",
    description: "Chlamydia psittaci infections",
  },
  {
    icdCode: "A710",
    description: "Initial stage of trachoma",
  },
  {
    icdCode: "A711",
    description: "Active stage of trachoma",
  },
  {
    icdCode: "A719",
    description: "Trachoma, unspecified",
  },
  {
    icdCode: "A740",
    description: "Chlamydial conjunctivitis",
  },
  {
    icdCode: "A7481",
    description: "Chlamydial peritonitis",
  },
  {
    icdCode: "A7489",
    description: "Other chlamydial diseases",
  },
  {
    icdCode: "A749",
    description: "Chlamydial infection, unspecified",
  },
  {
    icdCode: "A750",
    description: "Epidemic louse-borne typhus fever d/t Rickettsia prowazekii",
  },
  {
    icdCode: "A751",
    description: "Recrudescent typhus [Brill's disease]",
  },
  {
    icdCode: "A752",
    description: "Typhus fever due to Rickettsia typhi",
  },
  {
    icdCode: "A753",
    description: "Typhus fever due to Rickettsia tsutsugamushi",
  },
  {
    icdCode: "A759",
    description: "Typhus fever, unspecified",
  },
  {
    icdCode: "A770",
    description: "Spotted fever due to Rickettsia rickettsii",
  },
  {
    icdCode: "A771",
    description: "Spotted fever due to Rickettsia conorii",
  },
  {
    icdCode: "A772",
    description: "Spotted fever due to Rickettsia siberica",
  },
  {
    icdCode: "A773",
    description: "Spotted fever due to Rickettsia australis",
  },
  {
    icdCode: "A7740",
    description: "Ehrlichiosis, unspecified",
  },
  {
    icdCode: "A7741",
    description: "Ehrlichiosis chafeensis [E. chafeensis]",
  },
  {
    icdCode: "A7749",
    description: "Other ehrlichiosis",
  },
  {
    icdCode: "A778",
    description: "Other spotted fevers",
  },
  {
    icdCode: "A779",
    description: "Spotted fever, unspecified",
  },
  {
    icdCode: "A78",
    description: "Q fever",
  },
  {
    icdCode: "A790",
    description: "Trench fever",
  },
  {
    icdCode: "A791",
    description: "Rickettsialpox due to Rickettsia akari",
  },
  {
    icdCode: "A7981",
    description: "Rickettsiosis due to Ehrlichia sennetsu",
  },
  {
    icdCode: "A7982",
    description: "Anaplasmosis [A. phagocytophilum]",
  },
  {
    icdCode: "A7989",
    description: "Other specified rickettsioses",
  },
  {
    icdCode: "A799",
    description: "Rickettsiosis, unspecified",
  },
  {
    icdCode: "A800",
    description: "Acute paralytic poliomyelitis, vaccine-associated",
  },
  {
    icdCode: "A801",
    description: "Acute paralytic poliomyelitis, wild virus, imported",
  },
  {
    icdCode: "A802",
    description: "Acute paralytic poliomyelitis, wild virus, indigenous",
  },
  {
    icdCode: "A8030",
    description: "Acute paralytic poliomyelitis, unspecified",
  },
  {
    icdCode: "A8039",
    description: "Other acute paralytic poliomyelitis",
  },
  {
    icdCode: "A804",
    description: "Acute nonparalytic poliomyelitis",
  },
  {
    icdCode: "A809",
    description: "Acute poliomyelitis, unspecified",
  },
  {
    icdCode: "A8100",
    description: "Creutzfeldt-Jakob disease, unspecified",
  },
  {
    icdCode: "A8101",
    description: "Variant Creutzfeldt-Jakob disease",
  },
  {
    icdCode: "A8109",
    description: "Other Creutzfeldt-Jakob disease",
  },
  {
    icdCode: "A811",
    description: "Subacute sclerosing panencephalitis",
  },
  {
    icdCode: "A812",
    description: "Progressive multifocal leukoencephalopathy",
  },
  {
    icdCode: "A8181",
    description: "Kuru",
  },
  {
    icdCode: "A8182",
    description: "Gerstmann-Straussler-Scheinker syndrome",
  },
  {
    icdCode: "A8183",
    description: "Fatal familial insomnia",
  },
  {
    icdCode: "A8189",
    description: "Other atypical virus infections of central nervous system",
  },
  {
    icdCode: "A819",
    description: "Atypical virus infection of central nervous system, unsp",
  },
  {
    icdCode: "A820",
    description: "Sylvatic rabies",
  },
  {
    icdCode: "A821",
    description: "Urban rabies",
  },
  {
    icdCode: "A829",
    description: "Rabies, unspecified",
  },
  {
    icdCode: "A830",
    description: "Japanese encephalitis",
  },
  {
    icdCode: "A831",
    description: "Western equine encephalitis",
  },
  {
    icdCode: "A832",
    description: "Eastern equine encephalitis",
  },
  {
    icdCode: "A833",
    description: "St Louis encephalitis",
  },
  {
    icdCode: "A834",
    description: "Australian encephalitis",
  },
  {
    icdCode: "A835",
    description: "California encephalitis",
  },
  {
    icdCode: "A836",
    description: "Rocio virus disease",
  },
  {
    icdCode: "A838",
    description: "Other mosquito-borne viral encephalitis",
  },
  {
    icdCode: "A839",
    description: "Mosquito-borne viral encephalitis, unspecified",
  },
  {
    icdCode: "A840",
    description: "Far Eastern tick-borne encephalitis",
  },
  {
    icdCode: "A841",
    description: "Central European tick-borne encephalitis",
  },
  {
    icdCode: "A848",
    description: "Other tick-borne viral encephalitis",
  },
  {
    icdCode: "A8481",
    description: "Powassan virus disease",
  },
  {
    icdCode: "A8489",
    description: "Other tick-borne viral encephalitis",
  },
  {
    icdCode: "A849",
    description: "Tick-borne viral encephalitis, unspecified",
  },
  {
    icdCode: "A850",
    description: "Enteroviral encephalitis",
  },
  {
    icdCode: "A851",
    description: "Adenoviral encephalitis",
  },
  {
    icdCode: "A852",
    description: "Arthropod-borne viral encephalitis, unspecified",
  },
  {
    icdCode: "A858",
    description: "Other specified viral encephalitis",
  },
  {
    icdCode: "A86",
    description: "Unspecified viral encephalitis",
  },
  {
    icdCode: "A870",
    description: "Enteroviral meningitis",
  },
  {
    icdCode: "A871",
    description: "Adenoviral meningitis",
  },
  {
    icdCode: "A872",
    description: "Lymphocytic choriomeningitis",
  },
  {
    icdCode: "A878",
    description: "Other viral meningitis",
  },
  {
    icdCode: "A879",
    description: "Viral meningitis, unspecified",
  },
  {
    icdCode: "A880",
    description: "Enteroviral exanthematous fever [Boston exanthem]",
  },
  {
    icdCode: "A881",
    description: "Epidemic vertigo",
  },
  {
    icdCode: "A888",
    description: "Other specified viral infections of central nervous system",
  },
  {
    icdCode: "A89",
    description: "Unspecified viral infection of central nervous system",
  },
  {
    icdCode: "A90",
    description: "Dengue fever [classical dengue]",
  },
  {
    icdCode: "A91",
    description: "Dengue hemorrhagic fever",
  },
  {
    icdCode: "A920",
    description: "Chikungunya virus disease",
  },
  {
    icdCode: "A921",
    description: "O'nyong-nyong fever",
  },
  {
    icdCode: "A922",
    description: "Venezuelan equine fever",
  },
  {
    icdCode: "A9230",
    description: "West Nile virus infection, unspecified",
  },
  {
    icdCode: "A9231",
    description: "West Nile virus infection with encephalitis",
  },
  {
    icdCode: "A9232",
    description: "West Nile virus infection with oth neurologic manifestation",
  },
  {
    icdCode: "A9239",
    description: "West Nile virus infection with other complications",
  },
  {
    icdCode: "A924",
    description: "Rift Valley fever",
  },
  {
    icdCode: "A925",
    description: "Zika virus disease",
  },
  {
    icdCode: "A928",
    description: "Other specified mosquito-borne viral fevers",
  },
  {
    icdCode: "A929",
    description: "Mosquito-borne viral fever, unspecified",
  },
  {
    icdCode: "A930",
    description: "Oropouche virus disease",
  },
  {
    icdCode: "A931",
    description: "Sandfly fever",
  },
  {
    icdCode: "A932",
    description: "Colorado tick fever",
  },
  {
    icdCode: "A938",
    description: "Other specified arthropod-borne viral fevers",
  },
];

module.exports = { jsonIcd10code };
