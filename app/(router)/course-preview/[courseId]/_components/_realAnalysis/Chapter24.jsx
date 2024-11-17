import { InlineMath, BlockMath } from 'react-katex';

const DifferentiationChapter = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Chapter 24: The Essence of Differentiation and the Mean Value Theorem</h1>
      <hr className="border-t-2 border-gray-300 my-4" />

      <h2 className="text-2xl font-semibold mt-4 mb-2">The Intuition Behind Differentiation and Continuity</h2>

      <h3 className="text-xl font-medium mt-3 mb-2">Understanding the Limit of Functions</h3>
      <p className="mb-4">
        When we deal with limits in calculus, especially for continuous and differentiable functions, the key is to observe how the function behaves as it approaches a certain point. Consider the scenario where we analyze the product of two functions, <InlineMath math="f(x)" /> and <InlineMath math="g(x)" />, as one approaches a limit. If <InlineMath math="f(x)" /> is continuous, the limit of <InlineMath math="f(g(x))" /> as <InlineMath math="x" /> approaches a certain value <InlineMath math="a" /> is simply <InlineMath math="f" /> of the limit of <InlineMath math="g(x)" />.
      </p>
      <p className="mb-4">
        For instance, let’s consider differentiable functions. If <InlineMath math="f(x)" /> and <InlineMath math="g(x)" /> are differentiable, then their continuous nature guarantees smooth transitions as we approach limits. Intuitively, this is why we can take limits separately for the product, sum, or composition of such functions.
      </p>

      <hr className="border-t-2 border-gray-300 my-4" />

      <h2 className="text-2xl font-semibold mt-4 mb-2">Differentiation and Strange Continuous Functions</h2>

      <h3 className="text-xl font-medium mt-3 mb-2">Differentiable vs. Continuous</h3>
      <p className="mb-4">
        Differentiability implies continuity, but continuity doesn’t imply differentiability. To explore this concept, let’s address a thought-provoking question:
      </p>
      <p className="font-semibold mb-4">
        Must a continuous function be differentiable somewhere?
      </p>
      <p className="mb-4">
        At first glance, one might assume that even if a function isn't differentiable everywhere, it should be differentiable at least at some points. However, this assumption is false. There exist functions that are continuous everywhere but differentiable nowhere. A classic example involves a special kind of function defined by an infinite series of cosine functions:
      </p>
      <BlockMath math="f(x) = \sum_{n=1}^\infty a^n \cos(b^n \pi x)" className="my-4" />
      <p className="mb-4">
        Here, <InlineMath math="a" /> and <InlineMath math="b" /> are constants chosen such that the function maintains continuity yet remains non-differentiable. The behavior of this function becomes increasingly erratic as more terms are added, creating a jagged, fractal-like structure. In analysis, such functions demonstrate the intricate interplay between continuity and differentiability.
      </p>

      <hr className="border-t-2 border-gray-300 my-4" />

      <h2 className="text-2xl font-semibold mt-4 mb-2">The Mean Value Theorem: The Workhorse of Differentiation</h2>

      <h3 className="text-xl font-medium mt-3 mb-2">Statement and Intuition</h3>
      <p className="mb-4">
        The Mean Value Theorem (MVT) is a cornerstone of differential calculus. It states:
      </p>
      <p className="italic mb-4">
        If <InlineMath math="f(x)" /> is continuous on the closed interval <InlineMath math="[a, b]" /> and differentiable on the open interval <InlineMath math="(a, b)" />, then there exists some <InlineMath math="c \in (a, b)" /> such that:
      </p>
      <BlockMath math="f'(c) = \frac{f(b) - f(a)}{b - a}" className="my-4" />
      <p className="mb-4">
        This equation suggests that at some point within the interval, the instantaneous rate of change (slope of the tangent) matches the average rate of change (slope of the secant) over the interval.
      </p>

      <h3 className="text-xl font-medium mt-3 mb-2">Visual Interpretation</h3>
      <p className="mb-4">
        Imagine a function curve between two points <InlineMath math="A(a, f(a))" /> and <InlineMath math="B(b, f(b))" />. The secant line connecting these points represents the average slope. The MVT guarantees the existence of at least one point <InlineMath math="C(c, f(c))" /> where the tangent line has the same slope as this secant line.
      </p>

      <h3 className="text-xl font-medium mt-3 mb-2">Why MVT Matters</h3>
      <p className="mb-4">
        The Mean Value Theorem bridges function values and their derivatives without directly invoking limits. It allows us to:
      </p>
      <ol className="list-decimal list-inside mb-4 space-y-1">
        <li>Prove properties like monotonicity.</li>
        <li>Establish inequalities involving derivatives.</li>
        <li>Ground advanced theorems in calculus.</li>
      </ol>

      <hr className="border-t-2 border-gray-300 my-4" />

      <h2 className="text-2xl font-semibold mt-4 mb-2">Applications of the Mean Value Theorem</h2>

      <h3 className="text-xl font-medium mt-3 mb-2">Strictly Increasing Functions</h3>
      <p className="mb-4">
        Suppose <InlineMath math="f'(x) > 0" /> for all <InlineMath math="x \in (a, b)" />. This implies that <InlineMath math="f(x)" /> is strictly increasing on this interval. Using MVT:
      </p>
      <BlockMath math="f(b) - f(a) = (b - a) f'(c)" className="my-4" />
      <p className="mb-4">
        Since <InlineMath math="f'(c) > 0" /> and <InlineMath math="b > a" />, it follows that <InlineMath math="f(b) > f(a)" />.
      </p>

      <hr className="border-t-2 border-gray-300 my-4" />

      <h2 className="text-2xl font-semibold mt-4 mb-2">Proof of the Mean Value Theorem</h2>

      <h3 className="text-xl font-medium mt-3 mb-2">Key Idea: Rolle’s Theorem</h3>
      <p className="mb-4">
        MVT builds on a simpler result called Rolle’s Theorem, which asserts:
      </p>
      <p className="italic mb-4">
        If <InlineMath math="f(x)" /> is continuous on <InlineMath math="[a, b]" />, differentiable on <InlineMath math="(a, b)" />, and <InlineMath math="f(a) = f(b)" />, then there exists some <InlineMath math="c \in (a, b)" /> such that <InlineMath math="f'(c) = 0" />.
      </p>
      <p className="mb-4">
        Rolle’s Theorem ensures that even if a function returns to the same value at two endpoints, its derivative must be zero at some intermediate point.
      </p>

      <h3 className="text-xl font-medium mt-3 mb-2">Proving MVT</h3>
      <p className="mb-4">To prove MVT:</p>
      <ol className="list-decimal list-inside mb-4 space-y-1">
        <li>
          Define a function <InlineMath math="g(x)" /> that aligns with Rolle's conditions:
          <BlockMath math="g(x) = f(x) - \left(\frac{f(b) - f(a)}{b - a}\right)(x - a)" className="my-4" />
        </li>
        <li>Notice that <InlineMath math="g(a) = g(b)" />, allowing us to apply Rolle's Theorem.</li>
        <li>Therefore, there exists <InlineMath math="c \in (a, b)" /> such that <InlineMath math="g'(c) = 0" />.</li>
        <li>Simplifying <InlineMath math="g'(c)" />, we find <InlineMath math="f'(c) = \frac{f(b) - f(a)}{b - a}" />.</li>
      </ol>

      <hr className="border-t-2 border-gray-300 my-4" />

      <h2 className="text-2xl font-semibold mt-4 mb-2">Conclusion: Linking Derivatives and Function Behavior</h2>
      <p className="mb-4">
        The Mean Value Theorem underscores the profound relationship between the instantaneous and average rates of change. Its applications extend beyond proving function properties to establishing a foundation for integral and differential calculus. With the groundwork of MVT, we can tackle deeper analytical challenges, connecting intuition with formal proof.
      </p>
    </div>
  );
}

export default DifferentiationChapter;
