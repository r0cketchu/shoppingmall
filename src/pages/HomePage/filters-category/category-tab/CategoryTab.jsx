import { useAppDispatch, useAppSelector } from 'react-redux'; 
import { setActiveCategory } from './categoriesSlice';
import styles from './CategoryTab.module.css';

const CategoryTab = ({ text, categoryName }) => {
    const dispatch = useAppDispatch();
    const activeCatefory = useAppSelector((state) => state.categoriesSlice);

    const getActiveCategory = () => {
        dispatch (setActiveCategory(categoryName));
    };

    return (
        <button className = {
            categoryName === categoryName
            ? styles.active_category
            : styles.category_button
        }
        onClick = {getActiveCategory}
    >
        {text}
    </button>
    );
};

export default CategoryTab;