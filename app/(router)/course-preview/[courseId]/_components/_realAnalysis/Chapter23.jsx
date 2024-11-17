import { InlineMath, BlockMath } from 'react-katex';

const DiscontinuitiesChapter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Chapter 23: Discontinuities</h2>
      <p className="mt-6">
        In this chapter, we explore different types of discontinuities in functions and how they relate to monotonicity. Understanding discontinuities is fundamental to real analysis as it helps in determining the behavior of functions at specific points, especially in limits, continuity, and differentiability.
      </p>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-8 mb-4">1. Types of Discontinuities</h3>
      <p>
        A discontinuity occurs when a function is not continuous at a point. There are various types of discontinuities, but we will focus on <strong>discontinuities of the first kind</strong> and <strong>discontinuities of the second kind</strong>.
      </p>

      <h4 className="text-lg font-semibold mt-4">Discontinuities of the First Kind</h4>
      <p>
        A discontinuity is of the <strong>first kind</strong> if the <strong>left-hand limit</strong> and <strong>right-hand limit</strong> exist at the point, but the function itself may not be equal to the limit at that point. These discontinuities typically happen when there is a <strong>jump</strong> or <strong>removable gap</strong> in the function’s graph.
      </p>
      <p className="mt-4">
        <strong>Example</strong>: Consider a function where the values for rational numbers are different from those for irrational numbers. The function might be continuous at certain points (like 0) but have jumps or removable gaps at other points.
      </p>
      <ul className="list-disc pl-8 mt-4">
        <li>
          <strong>Continuity at Zero</strong>: A function may be continuous at zero, even if it is discontinuous at other points. This can be verified by showing that for every <InlineMath math="\epsilon > 0" />, there exists a corresponding <InlineMath math="\delta > 0" /> such that the function values fall within the <InlineMath math="\epsilon" />-ball around zero when the input is within the <InlineMath math="\delta" />-ball.
        </li>
      </ul>

      <h4 className="text-lg font-semibold mt-4">Discontinuities of the Second Kind</h4>
      <p>
        A discontinuity is of the <strong>second kind</strong> if either the <strong>left-hand limit</strong> or <strong>right-hand limit</strong> does not exist at the point, or both limits fail to be finite. This can happen when the function behaves erratically near the point, like in the case of <strong>oscillating</strong> functions.
      </p>
      <p className="mt-4">
        <strong>Example</strong>: For a function that is continuous at all irrational numbers and discontinuous at all rational numbers, it’s common to have discontinuities of the second kind. This occurs because the limit does not exist at rational points due to the density of both rational and irrational numbers in any neighborhood.
      </p>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-8 mb-4">2. Analyzing Specific Examples of Discontinuities</h3>
      <h4 className="text-lg font-semibold mt-4">Example 1: Discontinuities at Rational and Irrational Numbers</h4>
      <p>
        Let’s consider a function where:
      </p>
      <ul className="list-disc pl-8 mt-4">
        <li><InlineMath math="f(x) = 0" /> if <InlineMath math="x" /> is irrational</li>
        <li><InlineMath math="f(x) = x^2" /> if <InlineMath math="x" /> is rational</li>
      </ul>
      <p className="mt-4">
        <strong>Discontinuity at <InlineMath math="x = 0" />:</strong> This function is continuous at zero since both the left and right limits approach zero. At every point around zero, the behavior of the function can be bounded within any given <InlineMath math="\epsilon" />-ball by choosing an appropriate <InlineMath math="\delta" />-ball.
      </p>
      <p>
        <strong>Discontinuity at Non-zero Points:</strong> Away from zero, the function is discontinuous at each rational point, where it exhibits jump discontinuities. At each rational number, the function has a gap between the value of the function at the rational point and the behavior of the function around it.
      </p>

      <h4 className="text-lg font-semibold mt-4">Example 2: Discontinuities of the Second Kind</h4>
      <p>
        Consider the <strong>Dirichlet Function</strong>, which is defined as:
      </p>
      <ul className="list-disc pl-8 mt-4">
        <li><InlineMath math="f(x) = 0" /> if <InlineMath math="x" /> is irrational</li>
        <li><InlineMath math="f(x) = 1" /> if <InlineMath math="x" /> is rational</li>
      </ul>
      <p className="mt-4">
        At every point, the function is discontinuous because the function jumps between values for rational and irrational inputs. There are no well-defined limits at any point, and thus, the discontinuities are of the second kind.
      </p>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold">3. Monotonic Functions and Their Discontinuities</h3>
      <p>
        A <strong>monotonic function</strong> is a function that is either monotonically increasing or monotonically decreasing over an interval.
      </p>

      <h4 className="text-lg font-semibold mt-4">Monotonically Increasing Functions</h4>
      <p>
        A function <InlineMath math="f" /> is <strong>monotonically increasing</strong> on an interval <InlineMath math="[a, b]" /> if for every <InlineMath math="x \leq y" />, we have <InlineMath math="f(x) \leq f(y)" />. The function consistently increases (or stays constant) as we move from left to right along the interval.
      </p>

      <h4 className="text-lg font-semibold mt-4">Monotonically Decreasing Functions</h4>
      <p>
        A function <InlineMath math="f" /> is <strong>monotonically decreasing</strong> on an interval <InlineMath math="[a, b]" /> if for every <InlineMath math="x \leq y" />, we have <InlineMath math="f(x) \geq f(y)" />. The function consistently decreases (or stays constant) as we move from left to right.
      </p>

      <p className="mt-4">
        <strong>Theorem</strong>: If a function is monotonically increasing or decreasing, it cannot have <strong>discontinuities of the second kind</strong>. This means that the limits of a monotonic function at any point will either exist and be finite or have a <strong>jump discontinuity</strong>.
      </p>

      <h4 className="text-lg font-semibold mt-4">Why Monotonic Functions Have No Discontinuities of the Second Kind</h4>
      <p>
        If a function is monotonically increasing or decreasing, the left-hand and right-hand limits must exist and be finite. The function’s graph is either strictly increasing or decreasing, so no “wild jumps” or oscillations can occur.
      </p>
      <p className="mt-4">
        Thus, monotonic functions can only exhibit <strong>discontinuities of the first kind</strong>, specifically <strong>jump discontinuities</strong>, where the function’s left-hand and right-hand limits exist but the function does not match either limit at the point of discontinuity.
      </p>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-8 mb-4">4. Countability of Discontinuities in Monotonic Functions</h3>
      <p>
        An important result related to monotonic functions is that if a function is monotonic, the set of discontinuities is <strong>countable</strong>.
      </p>
      
      <h4 className="text-lg font-semibold mt-4">Why is the set of discontinuities countable?</h4>
      <ul>
        <li>In a monotonic function, each discontinuity corresponds to a <strong>jump</strong>. Since the function is monotonic, the jumps occur at <strong>disjoint intervals</strong>, meaning each jump is separated by a region where the function is continuous.</li>
        <li>For each discontinuity, we can identify a rational number between the left-hand and right-hand limits of the function at that point. Since the rationals are countable, the set of discontinuities must also be countable.</li>
      </ul>
      
      <h4 className="text-lg font-semibold mt-4">Example</h4>
      <p>
        A monotonic function might jump between values at several points, but since these jumps must occur at distinct locations (disjoint intervals), there can only be countably many such points.
      </p>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-8 mb-4">5. Theorem on the Set of Discontinuities of Monotonic Functions</h3>
      <p>If <InlineMath math="f" /> is a monotonic function on an interval <InlineMath math="[a,b]" />, then the set of points where <InlineMath math="f" /> is discontinuous is <strong>countable</strong>.</p>

      <h4 className="text-lg font-semibold mt-4">Proof Sketch</h4>
      <ul>
        <li>Each discontinuity can be associated with a rational number between the left-hand and right-hand limits of the function at the point of discontinuity.</li>
        <li>Since the rationals are countable, there can only be countably many discontinuities, as each discontinuity is associated with a unique rational number between the limits.</li>
      </ul>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-8 mb-4">Conclusion</h3>
      <p>
        In this chapter, we learned the different types of discontinuities and how they are classified as either of the first kind or the second kind. We also discussed monotonic functions, which are characterized by their behavior of always increasing or always decreasing, and how they can only have discontinuities of the first kind. Moreover, we proved that the set of discontinuities of a monotonic function is countable, making monotonic functions quite special in terms of their behavior. Understanding these properties is key to analyzing the behavior of functions in real analysis, especially when dealing with limits and continuity.
      </p>
    </div>
  )};

  export default DiscontinuitiesChapter;