const img1 = require("../images/slider/slide_3.png").default
const img2 = require("../images/slider/slide_2.png").default
const img3 = require("../images/slider/slide_1.png").default

const heroSliderData = [
    {
        title: "Giày cao cấp",
        description: "Bạn sẽ khó có nhiều thời gian để chăm chút cho sự lựa chọn giầy dép. Có quá nhiều phụ nữ nghĩ rằng giầy dép không quan trọng, nhưng toàn bộ sự tinh tế của phụ nữ toát ra chính từ đôi chân.",
        img: img1,
        color: "blue",
        path: "/catalog/giay-cao-cap-01"
    },
    {
        title: "Giày thể thao",
        description: "Tôi dành phần lớn thời gian của mình khoác lên những thứ bất tiện, vì vậy tôi chỉ nghĩ đến những đôi giầy thể thao.",
        img: img3,
        path: "/catalog/giay-cao-cap-03",
        color: "orange"
    },
    {
        title: "Giày thể thao cao cấp",
        description: "Cuồng giầy dép thật sự rất tuyệt – bạn có nhiều tự do hơn, bạn có thể phóng đại mọi thứ mà không lo lắng gì. Nhưng nếu sự cuồng đó lộ rõ trên nét mặt bạn thì thật sự là không bình thường.",
        img: img2,
        path: "/catalog/giay-cao-cap-02",
        color: "pink"
    }
]

export default heroSliderData