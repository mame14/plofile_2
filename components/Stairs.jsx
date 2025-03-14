import { animate, motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index fot staggered delay
// 時差遅延の逆インデックスを計算します
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs, echo representing a step of the stairs.
    Each div will have the same animation defined by the stairsAnimation object.
    The delay for each div is calculated dynamically based on it's reversed index,
    creating a staggered effect with decreasing delay for each subsequent step.

    6 つのモーション div をレンダリングし、階段のステップを表すエコーを表示します。
    各divには、stairsAnimation オブジェクトによって定義された同じアニメーションが含まれます。
    各divの遅延は、その逆indexに基づいて動的に計算され、後続の各ステップの遅延を減少させながら、時間差のある効果を作成します。
    */}

      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-ful w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
