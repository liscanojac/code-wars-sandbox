const value = new Date('24 March 2005');

function calcAge(value) {
    if(typeof value !== 'object') value = new Date(value);
    const now = new Date();
    let age = (now.getFullYear() - value.getFullYear());
    if (now.getMonth() < value.getMonth() || now.getMonth() === value.getMonth() && now.getDate() < value.getDate()) {
        age--;
    }
    return age;
}

calcAge(value)

function calcAge2(value) {
    if(typeof value !== 'object') value = new Date(value);
    const now = new Date();
    let age = calcAge(value)
    let months = (now.getMonth() - value.getMonth());
    if (months <= -6 || months >= 6) {
        if (now.getDate() >= value.getDate()) {
            age = age + 0.5
        }
    }
    return age;
}

calcAge2(value)

const calcAgeBroken = (date) => {
  const now = new Date();
  let age = (now.getFullYear() - date.getFullYear());
  if (now.getMonth() < date.getMonth() || now.getMonth() === date.getMonth() && now.getDate() < date.getDate()) {
    age--;
  }

  if (now.getMonth() - date.getMonth() >= 6) {
    age += 0.5
  }
  return age;
}

calcAgeBroken(value)

//18 < undefined

let FAHRERLAUBNISKLASSEN = [
    {
        title: 'motorraeder',
        klassen: [
            { key: 'A1', age_restriction: 15.5, handover: 15, text: 'Leichtkrafträder', img: 'A1', selected: false, automatic_select: false },
            {
                key: 'A2', age_restriction: 17.5, handover: 16, text: 'Krafträder bis 35KW und bis 0,2KW Leistung je Kilogramm beschränkt',
                img: 'A',
                selected: false, automatic_select: false,
                options: [
                    { text: 'Stufenweiser Zugang zu Klasse A', value: 'AUFSTG', age: 17.5 }
                ]
            },
            {
                key: 'A', age_restriction: 19.5, handover: 24, text: 'Krafträder',
                img: 'A',
                selected: false, automatic_select: false,
                options: [
                    { text: 'Stufenweiser Zugang zu Klasse A', value: 'AUFSTG', age: 19.5 },
                    { text: 'Trike >15KW', value: 'TRIKE', age: 20.5 }
                ]
            },
            { key: 'AM', age_restriction: 14.5, text: 'Kleinkrafträder', img: 'M', selected: false, automatic_select: false }
        ]
    },
    {
        title: 'personenkraftwagen',
        klassen: [
            {
                key: 'B', age_restriction: 17.5, handover: 18, text: 'KFZ bis 3500 kg',
                img: 'B',
                selected: false, automatic_select: false,
                options: [
                    { text: 'Begleitetes Fahren mit 17', value: 'BF17', age: 16.5 },
                    { text: 'Berufliche Gründe', value: 'BAUSB', age: 16.5 }
                ]
            },
            {
                key: 'BE', age_restriction: 17.5, handover: 18, text: 'Klasse B mit Anhänger >750 kg',
                img: 'BE',
                selected: false, automatic_select: false,
                options: [
                    { text: 'Begleitetes Fahren mit 17', value: 'BF17', age: 16.5 },
                    { text: 'Berufliche Gründe', value: 'BAUSB', age: 16.5 }
                ]
            },
        ]
    },
    {
        title: 'lastkraftwagen',
        klassen: [
            { key: 'C1', age_restriction: 17.5, handover: 18, text: 'KFZ bis 7500 kg', img: 'C1', selected: false, automatic_select: false },
            { key: 'C1E', age_restriction: 17.5, handover: 18, text: 'Klasse C1 mit Anhänger >750 kg', img: 'C1E', selected: false, automatic_select: false },
            {
                key: 'C', age_restriction: 17.5, handover: 21, text: 'KFZ über 7500 kg',
                img: 'C',
                selected: false, automatic_select: false,
                options: [
                    { text: 'Berufliche Gründe', value: 'BAUSB', age: 17.5 },
                    { text: 'Grundqualifikation §4 Abs.1 BKrFQG', value: 'BKRQG1', age: 17.5 },
                    { text: 'Einsatzfahrten, angeordnete Übungsfahrten vor dem 21.Lj', value: 'EAUEFV21', age: 17.5 },
                    { text: 'Angeordnete Prüfung reparierter Kfz vor dem 21.Lj', value: 'APRKFZV21', age: 17.5 }
                ]
            },
            {
                key: 'CE', age_restriction: 17.5, handover: 21, text: 'Klasse C mit Anhänger >750 kg',
                img: 'CE',
                selected: false, automatic_select: false,
                options: [
                    { text: 'Berufliche Gründe', value: 'BAUSB', age: 17.5 },
                    { text: 'Grundqualifikation §4 Abs.1 BKrFQG', value: 'BKRQG1', age: 17.5 }
                ]
            }
        ]
    },
    {
        title: 'kraftomnibusse',
        klassen: [
            { key: 'D1', age_restriction: 17.5, handover: 21, text: 'Omnibus  bis 16 Plätze', img: 'D1', selected: false, automatic_select: false, options: [{ text: 'Berufliche Gründe', value: 'BAUSB', age: 17.5 }] },
            { key: 'D1E', age_restriction: 17.5, handover: 21, text: 'Klasse D1 mit Anhänger >750 kg', img: 'D1E', selected: false, automatic_select: false, options: [{ text: 'Berufliche Gründe', value: 'BAUSB', age: 17.5 }] },
            {
                key: 'D', age_restriction: 17.5, handover: 24, text: 'Omnibus über 16 Plätze',
                img: 'D',
                selected: false, automatic_select: false,
                options: [
                    { text: 'Grundqualifikation §4 Abs.2 BKrFQG', value: 'BKRQG2', age: 22.5 },
                    { text: 'Grundqualifikation §4 Abs.1 BKrFQG', value: 'BKRQG1', age: 20.5 },
                    { text: 'Grundqualifikation §4 Abs.2 BKrFQG im Linienverkehr bis 50 km', value: 'BKRQG2L50', age: 20.5 },
                    { text: 'Berufliche Gründe', value: 'BAUSB', age: 19.5 },
                    { text: 'Berufliche Gründe im Linienverkehr bis 50 km', value: 'BAUSBL50', age: 17.5 },
                    { text: 'Einsatzfahrten, angeordnete Übungsfahrten vor dem 24.Lj.', value: 'EAUEFV24', age: 17.5 },
                    { text: 'Angeordnete Prüfung reparierter Kfz vor dem 24.Lj.', value: 'APRKFZV24', age: 17.5 },
                ]
            },
            {
                key: 'DE', age_restriction: 17.5, handover: 24, text: 'Klasse D mit Anhänger >750 kg',
                img: 'D1E',
                selected: false, automatic_select: false,
                options: [
                    { text: 'Grundqualifikation §4 Abs.2 BKrFQG', value: 'BKRQG2', age: 22.5 },
                    { text: 'Grundqualifikation §4 Abs.1 BKrFQG', value: 'BKRQG1', age: 20.5 },
                    { text: 'Grundqualifikation §4 Abs.2 BKrFQG im Linienverkehr bis 50 km', value: 'BKRQG2L50', age: 20.5 },
                    { text: 'Berufliche Gründe', value: 'BAUSB', age: 19.5 },
                    { text: 'Berufliche Gründe im Linienverkehr bis 50 km', value: 'BAUSBL50', age: 17.5 },
                ]
            }
        ]
    },
    {
        title: 'zug_und_arbeitsmaschinen',
        klassen: [
            { key: 'L', age_restriction: 14.5, handover: 16, text: 'ZAM bis 25 bzw. 40 km/h', img: 'L', selected: false, automatic_select: false, options: [{ text: 'Ausnahme Mindestalter', value: 'AUSNMA', age: 14.5 }] },
            { key: 'T', age_restriction: 15.5, handover: 16, text: 'ZAM bis 40 bzw. 60 km/h', img: 'T', selected: false, automatic_select: false }
        ]
    },
];

// function generateKlassen(userAge) {
//       FAHRERLAUBNISKLASSEN = FAHRERLAUBNISKLASSEN.reduce((acc, current) => {
//         const filteredKlassen = current.klassen.filter(({ age_restriction }) => {
//           return age_restriction <= userAge;
//         });
//         if (filteredKlassen.length) {
//           const filteringOptions = filteredKlassen.map((klassen) => {
//             if (klassen.options) {
//               const filteredOption = klassen.options.filter((opt) => userAge >= opt.age);
//               return {
//                 key: klassen.key,
//                 text: klassen.text,
//                 img: klassen.img,
//                 options: filteredOption,
//                 selected: klassen.selected,
//                 automatic_select: klassen.automatic_select
//               };
//             }
//             return klassen;
//           });
//           acc.push({ klassen: filteringOptions, title: current.title });
//         }
//         return acc;
//       }, []);
//     }

// generateKlassen(21.5)
// FAHRERLAUBNISKLASSEN

function generateKlassen2(userAge) {
  let result = []
  for (let i = 0; i < FAHRERLAUBNISKLASSEN.length; i++) {
    const currentVehicleType = FAHRERLAUBNISKLASSEN[i]
    const resultKlassen = []
    for (let j = 0; j < currentVehicleType.klassen.length; j++) {
      const currentKlassen = currentVehicleType.klassen[j]
      
      if (classHasMoreOptionsThanStandard(currentKlassen)) {
        const optionsAllowedByAge = currentKlassen.options.filter((option) => userAge >= option.age);
        
        if (optionsAllowedByAge.length) {
        	resultKlassen.push({
            ...currentKlassen,
            options: optionsAllowedByAge
          })  
        }
      	continue;
      }
      if (currentKlassen.age_restriction <= userAge) {
        resultKlassen.push(currentKlassen)
      }
    }
    if (resultKlassen.length) {
      result.push({
        ...currentVehicleType,
        klassen: resultKlassen
      })
    }
  }
  return result
}

function classHasMoreOptionsThanStandard(licenseClass) {
  return licenseClass.options && licenseClass.options.length;
}

// generateKlassen2(34.5)

let text = "Hello world!";
let result = text.substring(0,1);
text
result
