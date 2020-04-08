export default {
    products: [
        {
            id: "automaticControlEngineering",
            value: "Automatic Control engineering",
            checked: false
        },
        {
            id: "communicationEquipment",
            value: "Communication equipment",
            checked: false
        },
        {
            id: "electricmotors",
            value: "Electric motors",
            checked: false,
        //     subCategories: [
        //         {
        //             id: "bearings",
        //             value: "Bearings",
        //             checked: false,
        //             subProducts: [
        //                 {
        //                     id: "blueCollector",
        //                     value: "Blue Collector",
        //                     checked: false,
        //                 },
        //                 {
        //                     id: "yellowCollector",
        //                     value: "Yellow Collector",
        //                     checked: false,
        //                 },
        //                 {
        //                     id: "blackCollector",
        //                     value: "Black Collector",
        //                     checked: false,
        //                 },
        //                 {
        //                     id: "whiteCollector",
        //                     value: "White Collector",
        //                     checked: false,
        //                 },
        //                 {
        //                     id: "redCollector",
        //                     value: "Red Collector",
        //                     checked: false,
        //                 }
        //             ]
        //         },
        //         {
        //             id: "currentCollector",
        //             value: "Current Collector",
        //             checked: false
        //         },
        //         {
        //             id: "fansandfanimpellers",
        //             value: "Fans and Fan Impellers",
        //             checked: false
        //         }
        //     ]
        },
        {
            id: "electricequipment",
            value: "Electric equipment",
            checked: false
        },
        {
            id: "electricalComponents",
            value: "Electrical components",
            checked: false
        },
        {
            id: "factoryEquipment",
            value: "Factory equipment",
            checked: false
        },
        {
            id: "laserTech",
            value: "Laser tech.",
            checked: false
        },
        {
            id: "processAutomation",
            value: "Process automation",
            checked: false
        },
        // {
        //     id: 9,
        //     value: "Production engineering",
        //     checked: false
        // },
        // {
        //     id: 10,
        //     value: "Robotics",
        //     checked: false
        // },
        // {
        //     id: 11,
        //     value: "Sector-specific machines",
        //     checked: false
        // },
        // {
        //     id: 12,
        //     value: "Sensors and actuators",
        //     checked: false
        // },
        // {
        //     id: 13,
        //     value: "Other",
        //     checked: false
        // }
    ],
    categories: [
        {
            id: "bearings",
            value: "Bearings",
            checked: false,
            ownerProduct: "electricmotors"
        },
        {
            id: "currentCollector",
            value: "Current Collector",
            checked: false,
            ownerProduct: "electricmotors"
        },
        {
            id: "fansandfanimpellers",
            value: "Fans and Fan Impellers",
            checked: false,
            ownerProduct: "electricmotors"
        },
        {
            id: "deneme",
            value: "deneme",
            checked: false,
            ownerProduct: 'electricequipment'
        }
    ],
    subProducts: [
        {
            id: "blueCollector",
            value: "Blue Collector",
            checked: false,
            ownerCategory: "bearings"
        },
        {
            id: "yellowCollector",
            value: "Yellow Collector",
            checked: false,
            ownerCategory: "bearings"
        },
        {
            id: "blackCollector",
            value: "Black Collector",
            checked: false,
            ownerCategory: "bearings"
        },
        {
            id: "whiteCollector",
            value: "White Collector",
            checked: false,
            ownerCategory: "bearings"
        },
        {
            id: "redCollector",
            value: "Red Collector",
            checked: false,
            ownerCategory: "bearings"
        }
    ]
}