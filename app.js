// Data of elements up to Z=118 for names, symbols and default Mass
const elementsData = [
    { z: 1, symbol: "H", name: "Hidrógeno", mass: 1 },
    { z: 2, symbol: "He", name: "Helio", mass: 4 },
    { z: 3, symbol: "Li", name: "Litio", mass: 7 },
    { z: 4, symbol: "Be", name: "Berilio", mass: 9 },
    { z: 5, symbol: "B", name: "Boro", mass: 11 },
    { z: 6, symbol: "C", name: "Carbono", mass: 12 },
    { z: 7, symbol: "N", name: "Nitrógeno", mass: 14 },
    { z: 8, symbol: "O", name: "Oxígeno", mass: 16 },
    { z: 9, symbol: "F", name: "Flúor", mass: 19 },
    { z: 10, symbol: "Ne", name: "Neón", mass: 20 },
    { z: 11, symbol: "Na", name: "Sodio", mass: 23 },
    { z: 12, symbol: "Mg", name: "Magnesio", mass: 24 },
    { z: 13, symbol: "Al", name: "Aluminio", mass: 27 },
    { z: 14, symbol: "Si", name: "Silicio", mass: 28 },
    { z: 15, symbol: "P", name: "Fósforo", mass: 31 },
    { z: 16, symbol: "S", name: "Azufre", mass: 32 },
    { z: 17, symbol: "Cl", name: "Cloro", mass: 35 },
    { z: 18, symbol: "Ar", name: "Argón", mass: 40 },
    { z: 19, symbol: "K", name: "Potasio", mass: 39 },
    { z: 20, symbol: "Ca", name: "Calcio", mass: 40 },
    { z: 21, symbol: "Sc", name: "Escandio", mass: 45 },
    { z: 22, symbol: "Ti", name: "Titanio", mass: 48 },
    { z: 23, symbol: "V", name: "Vanadio", mass: 51 },
    { z: 24, symbol: "Cr", name: "Cromo", mass: 52 },
    { z: 25, symbol: "Mn", name: "Manganeso", mass: 55 },
    { z: 26, symbol: "Fe", name: "Hierro", mass: 56 },
    { z: 27, symbol: "Co", name: "Cobalto", mass: 59 },
    { z: 28, symbol: "Ni", name: "Níquel", mass: 59 },
    { z: 29, symbol: "Cu", name: "Cobre", mass: 64 },
    { z: 30, symbol: "Zn", name: "Zinc", mass: 65 },
    { z: 31, symbol: "Ga", name: "Galio", mass: 70 },
    { z: 32, symbol: "Ge", name: "Germanio", mass: 73 },
    { z: 33, symbol: "As", name: "Arsénico", mass: 75 },
    { z: 34, symbol: "Se", name: "Selenio", mass: 79 },
    { z: 35, symbol: "Br", name: "Bromo", mass: 80 },
    { z: 36, symbol: "Kr", name: "Kriptón", mass: 84 },
    { z: 37, symbol: "Rb", name: "Rubidio", mass: 85 },
    { z: 38, symbol: "Sr", name: "Estroncio", mass: 88 },
    { z: 39, symbol: "Y", name: "Itrio", mass: 89 },
    { z: 40, symbol: "Zr", name: "Circonio", mass: 91 },
    { z: 41, symbol: "Nb", name: "Niobio", mass: 93 },
    { z: 42, symbol: "Mo", name: "Molibdeno", mass: 96 },
    { z: 43, symbol: "Tc", name: "Tecnecio", mass: 98 },
    { z: 44, symbol: "Ru", name: "Rutenio", mass: 101 },
    { z: 45, symbol: "Rh", name: "Rodio", mass: 103 },
    { z: 46, symbol: "Pd", name: "Paladio", mass: 106 },
    { z: 47, symbol: "Ag", name: "Plata", mass: 108 },
    { z: 48, symbol: "Cd", name: "Cadmio", mass: 112 },
    { z: 49, symbol: "In", name: "Indio", mass: 115 },
    { z: 50, symbol: "Sn", name: "Estaño", mass: 119 },
    { z: 51, symbol: "Sb", name: "Antimonio", mass: 122 },
    { z: 52, symbol: "Te", name: "Telurio", mass: 128 },
    { z: 53, symbol: "I", name: "Yodo", mass: 127 },
    { z: 54, symbol: "Xe", name: "Xenón", mass: 131 },
    { z: 55, symbol: "Cs", name: "Cesio", mass: 133 },
    { z: 56, symbol: "Ba", name: "Bario", mass: 137 },
    { z: 57, symbol: "La", name: "Lantano", mass: 139 },
    { z: 58, symbol: "Ce", name: "Cerio", mass: 140 },
    { z: 59, symbol: "Pr", name: "Praseodimio", mass: 141 },
    { z: 60, symbol: "Nd", name: "Neodimio", mass: 144 },
    { z: 61, symbol: "Pm", name: "Prometio", mass: 145 },
    { z: 62, symbol: "Sm", name: "Samario", mass: 150 },
    { z: 63, symbol: "Eu", name: "Europio", mass: 152 },
    { z: 64, symbol: "Gd", name: "Gadolinio", mass: 157 },
    { z: 65, symbol: "Tb", name: "Terbio", mass: 159 },
    { z: 66, symbol: "Dy", name: "Disprosio", mass: 163 },
    { z: 67, symbol: "Ho", name: "Holmio", mass: 165 },
    { z: 68, symbol: "Er", name: "Erbio", mass: 167 },
    { z: 69, symbol: "Tm", name: "Tulio", mass: 169 },
    { z: 70, symbol: "Yb", name: "Iterbio", mass: 173 },
    { z: 71, symbol: "Lu", name: "Lutecio", mass: 175 },
    { z: 72, symbol: "Hf", name: "Hafnio", mass: 178 },
    { z: 73, symbol: "Ta", name: "Tántalo", mass: 181 },
    { z: 74, symbol: "W", name: "Wolframio", mass: 184 },
    { z: 75, symbol: "Re", name: "Renio", mass: 186 },
    { z: 76, symbol: "Os", name: "Osmio", mass: 190 },
    { z: 77, symbol: "Ir", name: "Iridio", mass: 192 },
    { z: 78, symbol: "Pt", name: "Platino", mass: 195 },
    { z: 79, symbol: "Au", name: "Oro", mass: 197 },
    { z: 80, symbol: "Hg", name: "Mercurio", mass: 201 },
    { z: 81, symbol: "Tl", name: "Talio", mass: 204 },
    { z: 82, symbol: "Pb", name: "Plomo", mass: 207 },
    { z: 83, symbol: "Bi", name: "Bismuto", mass: 209 },
    { z: 84, symbol: "Po", name: "Polonio", mass: 209 },
    { z: 85, symbol: "At", name: "Astato", mass: 210 },
    { z: 86, symbol: "Rn", name: "Radón", mass: 222 },
    { z: 87, symbol: "Fr", name: "Francio", mass: 223 },
    { z: 88, symbol: "Ra", name: "Radio", mass: 226 },
    { z: 89, symbol: "Ac", name: "Actinio", mass: 227 },
    { z: 90, symbol: "Th", name: "Torio", mass: 232 },
    { z: 91, symbol: "Pa", name: "Protactinio", mass: 231 },
    { z: 92, symbol: "U", name: "Uranio", mass: 238 },
    { z: 93, symbol: "Np", name: "Neptunio", mass: 237 },
    { z: 94, symbol: "Pu", name: "Plutonio", mass: 244 },
    { z: 95, symbol: "Am", name: "Americio", mass: 243 },
    { z: 96, symbol: "Cm", name: "Curio", mass: 247 },
    { z: 97, symbol: "Bk", name: "Berkelio", mass: 247 },
    { z: 98, symbol: "Cf", name: "Californio", mass: 251 },
    { z: 99, symbol: "Es", name: "Einstenio", mass: 252 },
    { z: 100, symbol: "Fm", name: "Fermio", mass: 257 },
    { z: 101, symbol: "Md", name: "Mendelevio", mass: 258 },
    { z: 102, symbol: "No", name: "Nobelio", mass: 259 },
    { z: 103, symbol: "Lr", name: "Lawrencio", mass: 262 },
    { z: 104, symbol: "Rf", name: "Rutherfordio", mass: 267 },
    { z: 105, symbol: "Db", name: "Dubnio", mass: 270 },
    { z: 106, symbol: "Sg", name: "Seaborgio", mass: 271 },
    { z: 107, symbol: "Bh", name: "Bohrio", mass: 270 },
    { z: 108, symbol: "Hs", name: "Hassio", mass: 277 },
    { z: 109, symbol: "Mt", name: "Meitnerio", mass: 276 },
    { z: 110, symbol: "Ds", name: "Darmstadtio", mass: 281 },
    { z: 111, symbol: "Rg", name: "Roentgenio", mass: 280 },
    { z: 112, symbol: "Cn", name: "Copernicio", mass: 285 },
    { z: 113, symbol: "Nh", name: "Nihonio", mass: 284 },
    { z: 114, symbol: "Fl", name: "Flerovio", mass: 289 },
    { z: 115, symbol: "Mc", name: "Moscovio", mass: 288 },
    { z: 116, symbol: "Lv", name: "Livermorio", mass: 293 },
    { z: 117, symbol: "Ts", name: "Teneso", mass: 294 },
    { z: 118, symbol: "Og", name: "Oganesón", mass: 294 },
];

function getElementByZ(z) {
    return elementsData.find(el => el.z === z) || null;
}

function getElementsWithElectrons(e) {
    if (e < 1 || e > 118) return [];
    
    // Un elemento neutro con 'e' electrones es el de Z=e.
    // También puede haber un catión del Z=e+1 o un anión del Z=e-1.
    const examples = [];
    examples.push(getElementByZ(e)?.symbol + " (neutro)");
    
    if (e + 1 <= 118) {
        examples.push(getElementByZ(e + 1)?.symbol + "⁺");
    }
    if (e + 2 <= 118) {
        examples.push(getElementByZ(e + 2)?.symbol + "²⁺");
    }
    if (e - 1 >= 1) {
        examples.push(getElementByZ(e - 1)?.symbol + "⁻");
    }
    
    return examples.filter(x => x).slice(0, 4); // Max 4 ejemplos
}

function parseSpecies(str) {
    if (!str) return null;
    str = str.trim();
    // Matches: symbol (1-2 chars, first uppercase) followed by optional charge
    const regex = /^([a-zA-Z]{1,2})(?:\^?([+-]\d+|\d+[+-]|[+-]))?$/;
    const match = str.match(regex);
    if (!match) return null;
    
    let symbol = match[1];
    let chargeStr = match[2];
    let charge = null;
    
    if (chargeStr) {
        if (chargeStr === '+' || chargeStr === '1+' || chargeStr === '+1') charge = 1;
        else if (chargeStr === '-' || chargeStr === '1-' || chargeStr === '-1') charge = -1;
        else {
            let sign = chargeStr.includes('-') ? -1 : 1;
            let num = parseInt(chargeStr.replace(/[+-]/g, ''));
            if (!isNaN(num)) charge = sign * num;
        }
    }
    
    return { symbol, charge };
}

document.addEventListener("DOMContentLoaded", () => {
    const btnCalc = document.getElementById("calcBtn");
    const btnClear = document.getElementById("clearBtn");
    const addSpeciesBtn = document.getElementById("addSpeciesBtn");
    const inputsContainer = document.getElementById("inputsContainer");
    
    const modelToggle = document.getElementById("modelToggle");
    const labelBohr = document.getElementById("labelBohr");
    const labelQuantum = document.getElementById("labelQuantum");

    if (modelToggle) {
        modelToggle.addEventListener("change", (e) => {
            const isQuantum = e.target.checked;
            
            if (isQuantum) {
                labelQuantum.classList.add("active");
                labelBohr.classList.remove("active");
            } else {
                labelBohr.classList.add("active");
                labelQuantum.classList.remove("active");
            }
            
            const visualizer = document.getElementById("atomVisualizer");
            if (visualizer) {
                const orbits = visualizer.querySelectorAll(".dynamic-orbit");
                const qCloud = visualizer.querySelector(".quantum-cloud-container");
                
                if (isQuantum) {
                    orbits.forEach(o => o.style.display = "none");
                    if (qCloud) qCloud.style.display = "block";
                } else {
                    orbits.forEach(o => o.style.display = "block");
                    if (qCloud) qCloud.style.display = "none";
                }
            }
        });
    }
    
    // UI Sections
    const section = document.getElementById("resultsSection");
    const summarySection = document.getElementById("summarySection");
    const summaryTableBody = document.getElementById("summaryTableBody");

    function attachBlockEvents(block) {
        let removeBtn = block.querySelector(".remove-block-btn");
        if (removeBtn) {
            removeBtn.addEventListener("click", () => {
                block.remove();
                updateRemoveButtons();
            });
        }
    }
    
    function updateRemoveButtons() {
        let blocks = inputsContainer.querySelectorAll(".species-input-block");
        blocks.forEach(block => {
            let removeBtn = block.querySelector(".remove-block-btn");
            if (removeBtn) {
                removeBtn.style.display = blocks.length > 1 ? "block" : "none";
            }
        });
    }

    attachBlockEvents(inputsContainer.querySelector(".species-input-block"));

    const colorThemes = ['theme-cyan', 'theme-pink', 'theme-orange', 'theme-green', 'theme-purple'];
    let themeIndex = 0;

    addSpeciesBtn.addEventListener("click", () => {
        let blocks = inputsContainer.querySelectorAll(".species-input-block");
        let newBlock = blocks[0].cloneNode(true);
        // clean inputs
        newBlock.querySelectorAll("input").forEach(inp => inp.value = "");
        
        // Aplicar clase de color dinámica
        themeIndex++;
        let assignedTheme = colorThemes[themeIndex % colorThemes.length];
        colorThemes.forEach(theme => newBlock.classList.remove(theme));
        newBlock.classList.add(assignedTheme);
        
        attachBlockEvents(newBlock);
        inputsContainer.appendChild(newBlock);
        updateRemoveButtons();
    });

    function solveBlock(block) {
        const inputs = {
            sym: block.querySelector(".inputSym"),
            z: block.querySelector(".inputZ"),
            a: block.querySelector(".inputA"),
            p: block.querySelector(".inputP"),
            e: block.querySelector(".inputE"),
            n: block.querySelector(".inputN")
        };

        let values = {
            z: inputs.z.value ? parseInt(inputs.z.value) : null,
            a: inputs.a.value ? parseInt(inputs.a.value) : null,
            p: inputs.p.value ? parseInt(inputs.p.value) : null,
            e: inputs.e.value ? parseInt(inputs.e.value) : null,
            n: inputs.n.value ? parseInt(inputs.n.value) : null,
            c: null
        };

        // Parse species if provided
        let symVal = inputs.sym ? inputs.sym.value : "";
        if (symVal) {
            let parsed = parseSpecies(symVal);
            if (parsed) {
                if (parsed.charge !== null && values.c === null) values.c = parsed.charge;
                
                let el = elementsData.find(e => e.symbol.toLowerCase() === parsed.symbol.toLowerCase());
                if (el) {
                    if (values.z === null) values.z = el.z;
                }
            }
        }

        let changed = true;
        let iter = 0;
        while(changed && iter < 10) {
            changed = false;
            iter++;

            if (values.z !== null && values.p === null) { values.p = values.z; changed = true; }
            if (values.p !== null && values.z === null) { values.z = values.p; changed = true; }
            if (values.p !== null && values.n !== null && values.a === null) { values.a = values.p + values.n; changed = true; }
            if (values.a !== null && values.p !== null && values.n === null) { values.n = values.a - values.p; changed = true; }
            if (values.a !== null && values.n !== null && values.p === null) { values.p = values.a - values.n; changed = true; }
            if (values.p !== null && values.c !== null && values.e === null) { values.e = values.p - values.c; changed = true; }
            if (values.p !== null && values.e !== null && values.c === null) { values.c = values.p - values.e; changed = true; }
            if (values.e !== null && values.c !== null && values.p === null) { values.p = values.e + values.c; changed = true; }
        }

        if (values.c === null && values.e === null && values.p !== null) {
            values.c = 0;
            values.e = values.p;
        }

        if (values.z !== null && values.a === null) {
            let el = getElementByZ(values.z);
            if (el) {
                values.a = el.mass;
                if (values.p !== null && values.n === null) {
                    values.n = values.a - values.p;
                }
            }
        }

        return values;
    }

    function renderAtomVisualization(p, n, e) {
        const visualizer = document.getElementById("atomVisualizer");
        if (!visualizer) return;
        visualizer.innerHTML = ""; // Clear existing

        // Nucleus
        const nucleus = document.createElement("div");
        nucleus.className = "dynamic-nucleus";
        let nucleusText = `p⁺:${p}`;
        if (n !== null) {
            nucleusText += `<br>n⁰:${n}`;
        }
        nucleus.innerHTML = nucleusText;
        visualizer.appendChild(nucleus);

        if (e <= 0) return; // No electrons to draw

        // Simplistic Shell distribution for didactic visualization
        const shellCapacities = [2, 8, 18, 32, 32, 18, 8];
        let remainingE = e;
        let shells = [];
        
        for (let cap of shellCapacities) {
            if (remainingE <= 0) break;
            let inThisShell = Math.min(remainingE, cap);
            shells.push(inThisShell);
            remainingE -= inThisShell;
        }

        // Draw orbits and electrons
        const maxRadius = 260; // Slightly larger for pro version
        const minRadius = 80;
        const radiusStep = shells.length > 1 ? (maxRadius - minRadius) / (shells.length - 1) : 0;

        shells.forEach((electronsInShell, shellIndex) => {
            let orbitDiameter = shells.length === 1 ? minRadius : minRadius + (radiusStep * shellIndex);
            
            const orbit = document.createElement("div");
            orbit.className = "dynamic-orbit";
            if (shellIndex % 2 !== 0) orbit.classList.add("shell-odd");
            orbit.style.width = `${orbitDiameter}px`;
            orbit.style.height = `${orbitDiameter}px`;

            // Pro 3D rotations
            let rotX = 65 + (shellIndex * 5); // Tilt to make it look like a 3D atom
            let rotY = (shellIndex * 135) % 180; // Spread orbits spherically
            orbit.style.transform = `translate(-50%, -50%) rotateX(${rotX}deg) rotateY(${rotY}deg)`;

            const electronContainer = document.createElement("div");
            electronContainer.className = "dynamic-electron-container";
            // Inner shells spin faster
            const duration = 5 + (shellIndex * 2); 
            const direction = shellIndex % 2 === 0 ? "normal" : "reverse";
            electronContainer.style.animation = `spin-electron ${duration}s linear infinite ${direction}`;

            for (let i = 0; i < electronsInShell; i++) {
                const angle = (i / electronsInShell) * 360;
                const electron = document.createElement("div");
                electron.className = "dynamic-electron";
                
                electron.style.top = "50%";
                electron.style.left = "50%";
                // Translate up to orbit edge, counter-rotate X slightly if needed, but glowing orbs look fine as is.
                electron.style.transform = `translate(-50%, -50%) rotateZ(${angle}deg) translateY(-${orbitDiameter/2}px) rotateX(90deg)`;

                electronContainer.appendChild(electron);
            }

            orbit.appendChild(electronContainer);
            visualizer.appendChild(orbit);
        });

        // Quantum Cloud Generation (Thousands of points)
        const quantumCloud = document.createElement("div");
        quantumCloud.className = "quantum-cloud-container";
        quantumCloud.id = "quantumCloud";

        const canvas = document.createElement("canvas");
        const size = 280;
        canvas.width = size;
        canvas.height = size;
        canvas.style.position = "absolute";
        canvas.style.top = "50%";
        canvas.style.left = "50%";
        canvas.style.transform = "translate(-50%, -50%)";
        
        const ctx = canvas.getContext("2d");
        const centerX = size / 2;
        const centerY = size / 2;
        
        // Generate thousands of points
        const totalPoints = Math.min(e * 400 + 2000, 18000); 
        
        const shellRadii = [25, 55, 85, 115];
        
        for (let i = 0; i < totalPoints; i++) {
            let shellIndex = 0;
            let rand = Math.random();
            if (rand > 0.5 && e > 2) shellIndex = 1;
            if (rand > 0.75 && e > 10) shellIndex = 2;
            if (rand > 0.9 && e > 18) shellIndex = 3;
            
            // Normal distribution using Box-Muller
            let u1 = Math.max(Math.random(), 0.0001);
            let u2 = Math.random();
            let z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
            
            let spread = shellIndex === 0 ? 12 : 18; 
            let r = Math.abs(shellRadii[shellIndex] + z0 * spread);
            
            let theta = Math.random() * 2 * Math.PI;
            
            let px = centerX + r * Math.cos(theta);
            let py = centerY + r * Math.sin(theta);
            
            let pSize = Math.random() > 0.85 ? 1.5 : 0.8;
            
            if (Math.random() > 0.8) {
                ctx.fillStyle = "rgba(243, 104, 224, 0.5)"; // Magenta points
            } else if (Math.random() > 0.6) {
                ctx.fillStyle = "rgba(108, 92, 231, 0.4)"; // Purple points
            } else {
                ctx.fillStyle = "rgba(0, 210, 211, 0.5)"; // Cyan points
            }
            
            ctx.beginPath();
            ctx.arc(px, py, pSize, 0, 2 * Math.PI);
            ctx.fill();
        }

        // Add a slow rotation animation to the canvas
        canvas.style.animation = "spin-electron 60s linear infinite";

        quantumCloud.appendChild(canvas);
        visualizer.appendChild(quantumCloud);

        // Sync visibility with current toggle state
        const toggle = document.getElementById("modelToggle");
        if (toggle && toggle.checked) {
            quantumCloud.style.display = "block";
            visualizer.querySelectorAll(".dynamic-orbit").forEach(o => o.style.display = "none");
        }
    }

    btnCalc.addEventListener("click", () => {
        let blocks = inputsContainer.querySelectorAll(".species-input-block");
        let results = [];
        let errors = 0;

        blocks.forEach(block => {
            block.classList.remove('error-state'); // Reset state first
            
            let solved = solveBlock(block);
            let valid = true;
            
            if (solved.z === null) {
                valid = false;
            } else {
                let elDef = getElementByZ(solved.z);
                if (elDef) {
                    solved.elementDef = elDef;
                    results.push(solved);
                } else {
                    valid = false;
                }
            }
            
            if (!valid) {
                block.classList.add('error-state');
                errors++;
            }
        });

        if (errors > 0 || results.length === 0) {
            alert("No pude resolver algunas tablas marcadas en ROJO por falta de datos o inconsistencias. Asegúrate de brindar al menos un par de datos válidos en ellas.");
            return;
        }

        if (results.length === 1) {
            // Render single card
            let solved = results[0];
            let elementDef = solved.elementDef;
            
            document.getElementById("resZ").innerText = solved.z;
            document.getElementById("resA").innerText = solved.a !== null ? solved.a : "?";
            document.getElementById("resSymbol").innerText = elementDef.symbol;
            
            let chargeLabel = "";
            let ionType = "Neutro";
            let ionBadgeAttr = "neutral";
            
            if (solved.c > 0) {
                chargeLabel = (solved.c === 1 ? "+" : solved.c + "+");
                ionType = "Catión";
                ionBadgeAttr = "cation";
            } else if (solved.c < 0) {
                chargeLabel = (solved.c === -1 ? "-" : Math.abs(solved.c) + "-");
                ionType = "Anión";
                ionBadgeAttr = "anion";
            }

            document.getElementById("resChargeLabel").innerText = chargeLabel;
            document.getElementById("resName").innerText = elementDef.name;
            
            let badgeEl = document.getElementById("resIonType");
            badgeEl.innerText = ionType;
            badgeEl.setAttribute("data-type", ionBadgeAttr);

            document.getElementById("statP").innerText = solved.p;
            document.getElementById("statE").innerText = solved.e;
            document.getElementById("statN").innerText = solved.n !== null ? solved.n : "?";

            let isotopesList = [solved.a, solved.a ? solved.a + 1 : elementDef.mass + 1, solved.a ? solved.a - 1 : elementDef.mass - 1].filter(x => x && x>0);
            isotopesList = [...new Set(isotopesList)].sort();
            document.getElementById("resIsotopes").innerText = `Ejemplos: ` + isotopesList.map(a => `${elementDef.symbol}-${a}`).join(", ") + `.`;

            let isoelectronics = getElementsWithElectrons(solved.e);
            document.getElementById("resIsoelectronic").innerText = `Ejemplos con ${solved.e} e⁻: ${isoelectronics.join(", ")}.`;

            renderAtomVisualization(solved.p, solved.n, solved.e);

            section.style.display = "block";
            summarySection.style.display = "none";
        } else {
            // Render summary table for multiple
            summaryTableBody.innerHTML = "";
            results.forEach(solved => {
                let symbol = solved.elementDef.symbol;
                if (solved.c && solved.c !== 0) {
                    let chargeStr = (solved.c > 0 ? ("+" + (solved.c > 1 ? solved.c : "")) : (solved.c < -1 ? solved.c : "-"));
                    symbol += `<sup>${chargeStr}</sup>`;
                }
                
                // create row
                let tr = document.createElement("tr");
                let cargaValue = (solved.c !== null) ? solved.c : 0;
                if (cargaValue > 0) cargaValue = "+" + cargaValue;

                tr.innerHTML = `
                    <td>${symbol}</td>
                    <td>${solved.z}</td>
                    <td>${solved.a !== null ? solved.a : "?"}</td>
                    <td>${solved.p}</td>
                    <td>${solved.n !== null ? solved.n : "?"}</td>
                    <td>${solved.e}</td>
                    <td>${cargaValue}</td>
                `;
                summaryTableBody.appendChild(tr);
            });

            section.style.display = "none";
            summarySection.style.display = "block";
        }
    });

    btnClear.addEventListener("click", () => {
        let blocks = inputsContainer.querySelectorAll(".species-input-block");
        blocks.forEach((block, index) => {
            block.classList.remove('error-state');
            if (index > 0) {
                block.remove();
            } else {
                block.querySelectorAll("input").forEach(inp => inp.value = "");
            }
        });
        themeIndex = 0;
        updateRemoveButtons();
        section.style.display = "none";
        summarySection.style.display = "none";
    });
});
