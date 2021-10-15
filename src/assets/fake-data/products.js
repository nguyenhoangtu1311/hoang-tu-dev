const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default

const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default

const products = [
    {
        title: "SPERNOVA 01",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "giay-chay",
        colors: ["white", "red", "orange"],
        slug: "giay-chay-01",
        size: ["s", "m", "l", "xl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "SPERNOVA 02",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "giay-chay",
        colors: ["white", "red", "blue"],
        slug: "giay-chay-02",
        size: ["s", "m"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "SPERNOVA 03",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "giay-chay",
        colors: ["white", "red", "orange", "yellow"],
        slug: "giay-chay-03",
        size: ["m"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "UltraBoost 04",
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "giay-chay",
        colors: ["white", "orange", "blue"],
        slug: "giay-chay-04",
        size: ["xl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "UltraBoost 05",
        price: '194000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "giay-chay",
        colors: ["white", "pink"],
        slug: "giay-chay-05",
        size: ["xxl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "UltraBoost 06",
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "giay-chay",
        colors: ["black"],
        slug: "giay-chay-06",
        size: ["s", "m", "xl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "UltraBoost 21 07",
        price: '194000',
        image02: product_07_image_01,
        image01: product_07_image_02,
        categorySlug: "giay-the-thao",
        colors: ["white", "red", "orange", "blue"],
        slug: "giay-the-thao-07",
        size: ["l", "xl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "UltraBoost 21 08",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "giay-the-thao",
        colors: ["white", "red", "black"],
        slug: "giay-the-thao-08",
        size: ["s", "m", "xl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "UltraBoost 21 09",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "giay-the-thao",
        colors: ["white", "blue"],
        slug: "giay-the-thao-09",
        size: ["m"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "PureBoost 10",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "giay-cao-cap",
        colors: ["blue", "black"],
        slug: "giay-cao-cap-10",
        size: ["l"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "PureBoost 11",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "giay-cao-cap",
        colors: ["blue", "black"],
        slug: "giay-cao-cap-11",
        size: ["s", "m", "xl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "PureBoost 12",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "giay-cao-cap",
        colors: ["blue"],
        slug: "giay-cao-cap-12",
        size: ["s", "m", "xl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "Alphamagma 13",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "giay-tap-luyen",
        colors: ["white", "red"],
        slug: "giay-tap-luyen-13",
        size: ["s", "m", "xl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "Alphamagma 14",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "giay-tap-luyen",
        colors: ["white", "blue"],
        slug: "giay-tap-luyen-14",
        size: ["s", "m"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "Alphamagma 15",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "giay-tap-luyen",
        colors: ["red", "blue"],
        slug: "giay-tap-luyen-15",
        size: ["xl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "Alphatorsion 16",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "giay-chay",
        colors: ["blue", "black"],
        slug: "giay-chay-16",
        size: ["m", "xl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "Alphatorsion 17",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "giay-chay",
        colors: ["white", "blue"],
        slug: "giay-chay-17",
        size: ["s", "l", "xl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    {
        title: "Alphatorsion 18",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "giay-chay",
        colors: ["blue", "black"],
        slug: "giay-chay-phong-cach-18",
        size: ["s", "m", "l", "xl"],
        description: "Bạn đang nhễ nhại mồ hôi và còn phải leo dốc thêm 2km nữa mới về đến nhà. Nhưng bạn có thể tìm thấy nguồn năng lượng và cảm hứng từ những vận động viên sẽ thi đấu vào mùa hè tới đây khi mang đôi giày chạy bộ adidas này. Thiết kế của đôi giày là thành quả hợp tác với nghệ sĩ đến từ Tokyo Takahashi Hiroko cùng thương hiệu HIROCOLEDGE của cô. Đế giữa đàn hồi mang họa tiết hình tròn yêu thích của nhà thiết kế bởi sự phù hợp với mọi giới tính, quốc gia và thời đại. Biến vấn đề thành giải pháp Thân giày sử dụng công nghệ Primeblue, chất liệu tái chế hiệu năng cao chứa ít nhất 50% sợi Parley Ocean Plastic."
    },
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData