import ShopItemHeader from "./ShopItemHeader.jsx";
import ShopItemDescription from "./ShopItemDescription.jsx";
import ShopItemPricing from "./ShopItemPricing.jsx";

const ShopItem = ({computer: {title, image, description, price}}) => {
    return (
        <section>
            <ShopItemHeader title={title} image={image} />
            <ShopItemDescription description={description} />
            <ShopItemPricing price={price} />
        </section>
    );
};

export default ShopItem ;
