import React, {
  createContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";

export const TotalContext = createContext();

export const ContextProvider = ({ children }) => {
  const safeParseJSON = (data) => {
    try {
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return safeParseJSON(storedFavorites);
  });

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return safeParseJSON(storedCart);
  });

  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Automatically remove all items from cart when productCount reaches 0
  useEffect(() => {
    if (productCount === 0 && cart.length > 0) {
      setCart([]); // Clear the cart
    }
  }, [productCount, cart]);

  const addFavorite = (product) => {
    setFavorites((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const addCart = (product) => {
    setCart((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      incrementProductCount();
      return [...prev, product];
    });
  };

  const removeFavorite = (ID) => {
    setFavorites((prev) => prev.filter((item) => item.id !== ID));
  };

  const removeCart = (ID) => {
    setCart((prev) => {
      const itemToRemove = prev.find((item) => item.id === ID);
      if (itemToRemove) decrementProductCount();
      return prev.filter((item) => item.id !== ID);
    });
  };

  const handleLike = useCallback(
    (product) => {
      if (favorites.some((item) => item.id === product.id)) {
        removeFavorite(product.id);
      } else {
        addFavorite(product);
      }
    },
    [favorites]
  );

  const handleCart = useCallback(
    (product) => {
      if (cart.some((item) => item.id === product.id)) {
        removeCart(product.id);
      } else {
        addCart(product);
      }
    },
    [cart]
  );

  const incrementProductCount = () => {
    setProductCount((prev) => prev + 1);
  };

  const decrementProductCount = () => {
    setProductCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const favoritesCount = useMemo(() => favorites.length, [favorites]);
  const cartCount = useMemo(() => cart.length, [cart]);

  return (
    <TotalContext.Provider
      value={{
        favorites,
        handleLike,
        favoritesCount,
        cart,
        handleCart,
        addCart,
        cartCount,
        productCount,
        incrementProductCount,
        decrementProductCount,
      }}
    >
      {children}
    </TotalContext.Provider>
  );
};
