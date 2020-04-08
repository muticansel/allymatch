export default {
    products: [
        {
            id: "automaticcontrolengineering",
            value: "Automatic Control engineering",
            checked: false
        },
        {
            id: "communicationequipment",
            value: "Communication equipment",
            checked: false
        },
        {
            id: "electricmotors",
            value: "Electric motors",
            checked: false,
        },
        {
            id: "electricequipment",
            value: "Electric equipment",
            checked: false
        },
        {
            id: "electricalcomponents",
            value: "Electrical components",
            checked: false
        },
        {
            id: "factoryequipment",
            value: "Factory equipment",
            checked: false
        },
        {
            id: "lasertech",
            value: "Laser tech.",
            checked: false
        },
        {
            id: "processautomation",
            value: "Process automation",
            checked: false
        },
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
            id: "bluecollector",
            value: "Blue Collector",
            checked: false,
            ownerCategory: "bearings"
        },
        {
            id: "yellowcollector",
            value: "Yellow Collector",
            checked: false,
            ownerCategory: "bearings"
        },
        {
            id: "blackcollector",
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
            id: "redcollector",
            value: "Red Collector",
            checked: false,
            ownerCategory: "bearings"
        }
    ]
}