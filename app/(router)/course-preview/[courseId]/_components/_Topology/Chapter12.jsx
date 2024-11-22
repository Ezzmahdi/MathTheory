import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const MetricSpacesChapter = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6">Chapter 12: Metric Spaces and Metrizability</h1>
      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Motivation</h2>
        <h3 className="text-2xl font-medium mb-3">Why Study Metric Spaces?</h3>
        <p className="mb-4">
          From the beginning of our exploration of topology, we've encountered spaces like{" "}
          <InlineMath math="\mathbb{R}^n" /> with the <em>usual topology</em>, which is defined by
          a distance function. The concept of "distance" simplifies many proofs and allows us to
          develop a clear intuition for topological concepts. This distance function, or{" "}
          <strong>metric</strong>, provides tools such as{" "}
          <InlineMath math="\varepsilon" />
          -balls:
        </p>
        <BlockMath math="B_\varepsilon(x) = \{ y \in \mathbb{R}^n : d(x, y) < \varepsilon \}" />
        <p className="mb-4">
          These <InlineMath math="\varepsilon" />-balls form a basis for the topology, which makes
          it straightforward to describe and analyze open sets, convergence, and continuity. For
          instance, proofs that <InlineMath math="\mathbb{R}^n" /> is Hausdorff, regular, or normal
          are significantly simplified due to its metric structure.
        </p>
        <p className="mb-4">
          In this chapter, we formally define <strong>metric spaces</strong>—a generalization of
          such spaces—and explore their properties. Metric spaces exhibit elegant and predictable
          behavior, which is why they are often seen as a benchmark for "niceness" in topology.
        </p>
        <hr className="my-6" />

        <h4 className="text-xl font-medium mb-2">Key Questions</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>How can we tell if a topological space is a metric space?</li>
          <li>What are some properties that all metric spaces share?</li>
          <li>
            Can we find a metric that generates a given topology?  
            For example:
            <ul className="list-[circle] list-inside ml-6 space-y-1">
              <li>Is the Sorgenfrey Line metrizable?</li>
              <li>Are discrete or indiscrete spaces metrizable?</li>
            </ul>
          </li>
        </ul>
      </section>
      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Metric Spaces</h2>
        <h3 className="text-2xl font-medium mb-3">Definition</h3>
        <p className="mb-4">
          A metric space consists of a set <InlineMath math="X" /> paired with a metric, or distance
          function, <InlineMath math="d" />, that satisfies the following properties:
        </p>
        <h4 className="text-xl font-medium mb-2">Definition 2.1. Metric</h4>
        <p className="mb-4">
          Let <InlineMath math="X" /> be a set. A function{" "}
          <InlineMath math="d: X \times X \to \mathbb{R}" /> is called a <strong>metric</strong> if
          it satisfies the following:
        </p>
        <ol className="list-decimal list-inside ml-6 space-y-2">
          <li>
            <strong>Identity of Indiscernibles:</strong>{" "}
            <InlineMath math="d(x, y) = 0" /> if and only if{" "}
            <InlineMath math="x = y" />.
          </li>
          <li>
            <strong>Non-negativity:</strong> <InlineMath math="d(x, y) \geq 0" /> for all{" "}
            <InlineMath math="x, y \in X" />.
          </li>
          <li>
            <strong>Symmetry:</strong> <InlineMath math="d(x, y) = d(y, x)" /> for all{" "}
            <InlineMath math="x, y \in X" />.
          </li>
          <li>
            <strong>Triangle Inequality (Subadditivity):</strong>{" "}
            <InlineMath math="d(x, z) \leq d(x, y) + d(y, z)" /> for all{" "}
            <InlineMath math="x, y, z \in X" />.
          </li>
        </ol>
        <p className="mb-4">
          When a metric <InlineMath math="d" /> is defined on <InlineMath math="X" />, the pair{" "}
          <InlineMath math="(X, d)" /> is called a <strong>metric space</strong>.
        </p>
        <p className="mb-4">
          For any <InlineMath math="x \in X" /> and <InlineMath math="\varepsilon > 0" />, the set{" "}
          <InlineMath math="B_\varepsilon(x) = \{ y \in X : d(x, y) < \varepsilon \}" /> is called
          the <strong><InlineMath math="\varepsilon"/>-ball centered at <InlineMath math="x"/>"</strong>. These{" "}
          <InlineMath math="\varepsilon" />-balls are foundational to defining the topology of a
          metric space.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-8">
        <h3 className="text-xl font-bold mb-4">Examples of Metrics</h3>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              1. Usual Metric on <InlineMath math="\mathbb{R}" />:
            </h3>
            <p className="mb-2">
              Defined as <InlineMath math="d(x, y) = |x - y|" />.
            </p>
            <p>- Measures the straight-line distance between two points on the real line.</p>
          </div>
          <hr className="my-6" />

          <div>
            <h3 className="text-lg font-semibold mb-2">
              2. Euclidean Metric on <InlineMath math="\mathbb{R}^n" />:
            </h3>
            <p className="mb-2">
              For <InlineMath math="x = (x_1, \ldots, x_n)" /> and{" "}
              <InlineMath math="y = (y_1, \ldots, y_n)" />,
            </p>
            <BlockMath math="d(x, y) = \sqrt{(x_1 - y_1)^2 + \ldots + (x_n - y_n)^2}" />
            <p>- Generalizes the straight-line distance to <InlineMath math="n" />-dimensions.</p>
          </div>
          <hr className="my-6" />

          <div>
            <h3 className="text-lg font-semibold mb-2">3. Square Metric on <InlineMath math="\mathbb{R}^2" />:</h3>
            <BlockMath math="d(x, y) = \max\{ |x_1 - y_1|, |x_2 - y_2| \}" />
            <p className="mb-2">- This metric forms squares as <InlineMath math="\varepsilon" />-balls, hence the name.</p>
            <p>
              <em>Visualization Tip:</em> Imagine a square centered at{" "}
              <InlineMath math="x" /> where all points within the maximum coordinate distance{" "}
              <InlineMath math="\varepsilon" /> lie inside.
            </p>
          </div>
          <hr className="my-6" />

          <div>
            <h3 className="text-lg font-semibold mb-2">
              4. Taxicab Metric (Manhattan Distance) on{" "}
              <InlineMath math="\mathbb{R}^2" />:
            </h3>
            <BlockMath math="d(x, y) = |x_1 - y_1| + |x_2 - y_2|" />
            <p>
              - Measures distance as if traveling along grid lines, similar to a taxi navigating a
              city.
            </p>
          </div>
          <hr className="my-6" />

          <div>
            <h3 className="text-lg font-semibold mb-2">5. Discrete Metric on <InlineMath math="X" />:</h3>
            <BlockMath
              math={`d(x, y) = 
              \\begin{cases} 
              0 & \\text{if } x = y, \\\\ 
              1 & \\text{if } x \\neq y.
              \\end{cases}`}
            />
            <p>- Treats all distinct points as "equally far apart."</p>
          </div>
          <hr className="my-6" />

          <div>
            <h3 className="text-lg font-semibold mb-2">
              6. Function Spaces (Continuous Functions):
            </h3>
            <p>
              Let <InlineMath math="X = C[0, 1]" />, the set of all continuous functions{" "}
              <InlineMath math="f: [0, 1] \to \mathbb{R}" />. Define:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <InlineMath math="d_1(f, g) = \int_0^1 |f(x) - g(x)| \, dx" />: Measures total
                deviation between <InlineMath math="f" /> and <InlineMath math="g" />.
              </li>
              <li>
                <InlineMath math="d_2(f, g) = \sqrt{\int_0^1 (f(x) - g(x))^2 \, dx}" />: Root mean
                square deviation.
              </li>
              <li>
                <InlineMath math="d_\infty(f, g) = \max_{x \in [0, 1]} |f(x) - g(x)|" />: Maximum
                pointwise deviation.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Metric Topologies</h2>
        <p className="mb-4">
          The key benefit of defining metric spaces is the induced topology.
        </p>
        <hr className="my-6" />

        <h3 className="text-xl font-semibold mb-2">Definition 3.2. Metric Topology</h3>
        <p className="mb-4">
          Let <InlineMath math="(X, d)" /> be a metric space. The <strong>metric topology</strong>{" "}
          is the topology generated by the basis:
        </p>
        <BlockMath math="\mathcal{B}_d = \{ B_\varepsilon(x) : x \in X, \varepsilon > 0 \}" />
        <p>This topology is <strong>canonical</strong> for metric spaces and guarantees well-behaved properties like openness, closeness, and convergence.</p>
      </section>
      <hr className="my-6" />

      <section>
        <h2 className="text-2xl font-bold mb-4">Metrizability</h2>

        <h3 className="text-xl font-semibold mb-2">Definition 4.1.</h3>
        <p className="mb-4">
          A topological space <InlineMath math="(X, \mathcal{T})" /> is <strong>metrizable</strong>{" "}
          if there exists a metric <InlineMath math="d" /> such that the topology{" "}
          <InlineMath math="\mathcal{T}" /> is the metric topology generated by{" "}
          <InlineMath math="d" />.
        </p>
        <hr className="my-6" />

        <h3 className="text-xl font-semibold mb-2">Key Properties of Metrizability</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Topological Invariance:</strong> Metrizability is preserved under homeomorphisms. For instance, if{" "}
            <InlineMath math="(X, \mathcal{T})" /> and <InlineMath math="(Y, \mathcal{U})" /> are
            metrizable, a homeomorphism <InlineMath math="f: X \to Y" /> ensures that{" "}
            <InlineMath math="Y" /> inherits metrizability.
          </li>
          <li>
            <strong>Flexibility of Metrics:</strong> Many different metrics can generate the same topology. This is why we often focus on metrizability instead of the specific form of the metric.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MetricSpacesChapter;
