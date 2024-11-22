import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const CompactificationsPage = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold">Chapter 19: Compactifications and the Stone-Čech Compactification</h1>
      <p>
        This chapter explores the concept of compactifications, focusing on the{" "}
        <strong>one-point compactification</strong> and the <strong>Stone-Čech compactification</strong>. 
        These constructions transform non-compact spaces into compact ones, enabling a deeper 
        understanding of their behavior at "infinity" and allowing us to study them in a more controlled, 
        compact setting.
      </p>
      <hr className="my-4" />

      <h2 className="text-2xl font-semibold">1. One-Point Compactification</h2>
      
      <h3 className="text-xl font-semibold">Definition and Intuition</h3>
      <p>
        A <strong>compactification</strong> of a space <InlineMath math="X" /> is a compact space 
        <InlineMath math="Y" /> such that <InlineMath math="X" /> is a dense subset of <InlineMath math="Y" />. 
        The <strong>one-point compactification</strong> is a construction where we add a single point, 
        <InlineMath math="\infty" />, to <InlineMath math="X" />, representing all "points at infinity."
      </p>
      <p>
        The topology on this extended space, denoted <InlineMath math="\sigma(X)" />, is defined as follows:
      </p>
      <ul>
        <li>Open sets in <InlineMath math="X" /> remain open in <InlineMath math="\sigma(X)" />.</li>
        <li>
          Any open set containing <InlineMath math="\infty" /> is of the form 
          <InlineMath math="(\sigma(X) \setminus K) \cup \{\infty\}" />, where 
          <InlineMath math="K \subset X" /> is compact.
        </li>
      </ul>
      <p>
        <strong>Why is this useful?</strong> The one-point compactification "closes off" the space, 
        letting us work in a compact setting while preserving the topology of the original space where possible.
      </p>

      <hr className="my-4" />

      <h3 className="text-xl font-semibold">Key Properties</h3>
      <ul className="list-disc pl-5">
        <li><InlineMath math="\sigma(X)" /> is compact.</li>
        <li><InlineMath math="\sigma(X)" /> is Hausdorff.</li>
        <li>
          <InlineMath math="X" /> is homeomorphic to its image in <InlineMath math="\sigma(X)" />, excluding 
          <InlineMath math="\infty" />.
        </li>
        <li>The construction works only if <InlineMath math="X" /> is <strong>locally compact</strong>.</li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-xl font-semibold">Examples</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">Example 1: The Open Interval <InlineMath math="(0, 1)" /></h4>
          <p>
            Adding the point <InlineMath math="\infty" /> to <InlineMath math="(0, 1)" /> essentially "joins" 
            the two ends of the interval, forming a circle.
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Before Compactification:</strong> The interval is non-compact, with no endpoint at 0 or 1.
            </li>
            <li>
              <strong>After Compactification:</strong> The interval wraps around so that 0 and 1 are connected via 
              <InlineMath math="\infty" />.
            </li>
          </ul>
          <p>
            Think of a piece of string: pulling its ends together and tying them forms a loop.
          </p>
        </div>
        <hr className="my-4" />

        <div>
          <h4 className="font-semibold">Example 2: The Real Line <InlineMath math="\mathbb{R}" /></h4>
          <p>
            Adding a single point at infinity to <InlineMath math="\mathbb{R}" /> creates a space homeomorphic to a circle.
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Before Compactification:</strong> The real line extends infinitely in both directions.
            </li>
            <li>
              <strong>After Compactification:</strong> The ends of the line are "curled around" and connected at 
              <InlineMath math="\infty" />, forming a continuous loop.
            </li>
          </ul>
          <p>Imagine a stretched-out rubber band being pulled into a closed circle.</p>
        </div>
        <hr className="my-4" />

        <div>
          <h4 className="font-semibold">Example 3: The Plane <InlineMath math="\mathbb{R}^2" /></h4>
          <p>
            Adding <InlineMath math="\infty" /> to <InlineMath math="\mathbb{R}^2" /> results in a space 
            homeomorphic to a sphere.
          </p>
          <ul className="list-disc pl-5">
            <li><strong>Before Compactification:</strong> The plane extends infinitely in all directions.</li>
            <li><strong>After Compactification:</strong> The infinite plane wraps onto the surface of a sphere, with <InlineMath math="\infty" /> corresponding to the "north pole."</li>
          </ul>
          <p>
            This is analogous to how the Earth’s surface is represented on a map: flattening a sphere distorts 
            distances but retains the topology.
          </p>
        </div>
      </div>

      <hr className="my-4" />

      <h3 className="text-xl font-semibold">Applications</h3>
      <ul className="list-disc pl-5">
        <li><strong>Function Analysis:</strong> In compactified spaces, continuous functions attain maxima and minima.</li>
        <li><strong>Boundary Understanding:</strong> Helps analyze behavior "at infinity."</li>
        <li>
          <strong>Simplicity in Proofs:</strong> Compactifications often simplify theorems and arguments by providing 
          a bounded framework.
        </li>
      </ul>
      <hr className="my-4" />

      <h2 className="text-2xl font-bold mb-6">2. The Stone-Čech Compactification</h2>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Definition</h2>
        <p className="mb-4">
          The <strong>Stone-Čech compactification</strong>, <InlineMath math="\beta X" />, is the "largest"
          compactification of a topological space <InlineMath math="X" />. Unlike the one-point compactification, it
          is constructed in a way that every continuous function from <InlineMath math="X" /> to a compact Hausdorff
          space extends uniquely to <InlineMath math="\beta X" />.
        </p>
        <hr className="my-4" />

        <h3 className="text-lg font-semibold mb-3">Formal Definition</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <InlineMath math="\beta X" /> is compact and Hausdorff.
          </li>
          <li>
            There exists a continuous inclusion map <InlineMath math="i: X \to \beta X" />, such that:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>
                For every continuous map <InlineMath math="f: X \to K" /> (where <InlineMath math="K" /> is
                compact), there exists a unique <InlineMath math="\tilde{f}: \beta X \to K" /> with{" "}
                <InlineMath math="f = \tilde{f} \circ i" />.
              </li>
            </ul>
          </li>
        </ul>
        <p className="mb-4">
          <strong>Intuition:</strong> <InlineMath math="\beta X" /> captures every "possible" behavior of continuous
          functions on <InlineMath math="X" />.
        </p>
      </section>
      <hr className="my-4" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Construction</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>
            Consider all bounded continuous functions on <InlineMath math="X" />, denoted{" "}
            <InlineMath math="C(X, [0, 1])" />.
          </li>
          <li>
            Define a mapping <InlineMath math="i: X \to [0, 1]^{C(X, [0, 1])}" /> by{" "}
            <InlineMath math="i(x) = (f(x))_{f \in C(X, [0, 1])}" />.
          </li>
          <li>
            The closure of <InlineMath math="i(X)" /> in the compact space{" "}
            <InlineMath math="[0, 1]^{C(X, [0, 1])}" /> is <InlineMath math="\beta X" />.
          </li>
        </ol>
      </section>
      <hr className="my-4" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Properties</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Universal Property:</strong> <InlineMath math="\beta X" /> is the "largest" compactification; every
            compactification of <InlineMath math="X" /> embeds into <InlineMath math="\beta X" />.
          </li>
          <li>
            <strong>Rigidity:</strong> For spaces like <InlineMath math="\mathbb{N}" />,{" "}
            <InlineMath math="\beta \mathbb{N}" /> includes all possible ultrafilters, making it uncountably infinite.
          </li>
          <li>
            <strong>Rich Functionality:</strong> Any bounded continuous function on <InlineMath math="X" /> extends
            uniquely to <InlineMath math="\beta X" />.
          </li>
        </ul>
      </section>
      <hr className="my-4" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Examples</h2>
        <h3 className="text-lg font-semibold mb-3">Example 1: <InlineMath math="\mathbb{N}" /> (Natural Numbers)</h3>
        <p className="mb-4">
          The Stone-Čech compactification of <InlineMath math="\mathbb{N}" />, denoted{" "}
          <InlineMath math="\beta \mathbb{N}" />, includes all ultrafilters on <InlineMath math="\mathbb{N}" />. It is
          uncountably infinite and much larger than <InlineMath math="\mathbb{N}" /> itself.
        </p>

        <h3 className="text-xl font-semibold mb-3">Example 2: The Real Line <InlineMath math="\mathbb{R}" /></h3>
        <p className="mb-4">
          The Stone-Čech compactification of <InlineMath math="\mathbb{R}" /> is highly intricate and larger than the
          one-point compactification. Instead of simply "closing" the ends,{" "}
          <InlineMath math="\beta \mathbb{R}" /> incorporates all ultrafilters on <InlineMath math="\mathbb{R}" />,
          leading to a space that is not metrizable.
        </p>
      </section>
      <hr className="my-4" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Applications</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Functional Analysis:</strong> Stone-Čech compactifications are essential for understanding spaces of
            bounded functions.
          </li>
          <li>
            <strong>Topology:</strong> Provides a framework for studying spaces beyond local compactness.
          </li>
          <li>
            <strong>Set Theory and Logic:</strong> Connections with ultrafilters make <InlineMath math="\beta X" />{" "}
            significant in foundational mathematics.
          </li>
        </ul>
      </section>
      <hr className="my-4" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Comparison: One-Point vs. Stone-Čech</h2>
        <table className="table-auto w-full border-collapse border border-gray-300 text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Property</th>
              <th className="border border-gray-300 px-4 py-2">One-Point Compactification</th>
              <th className="border border-gray-300 px-4 py-2">Stone-Čech Compactification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Number of Points Added</td>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">Typically uncountably many</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Universality</td>
              <td className="border border-gray-300 px-4 py-2">Minimal compactification</td>
              <td className="border border-gray-300 px-4 py-2">Largest compactification</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Applicability</td>
              <td className="border border-gray-300 px-4 py-2">Locally compact spaces</td>
              <td className="border border-gray-300 px-4 py-2">Completely regular spaces</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Topology</td>
              <td className="border border-gray-300 px-4 py-2">Simple</td>
              <td className="border border-gray-300 px-4 py-2">Complex, incorporates ultrafilters</td>
            </tr>
          </tbody>
        </table>
      </section>
      <hr className="my-4" />

      <section>
        <h2 className="text-xl font-semibold mb-4">Conclusion</h2>
        <p>
          The one-point compactification and Stone-Čech compactification are two powerful tools in topology. While the
          former is simpler and intuitive, the latter provides a universal framework that accommodates all possible
          continuous behaviors. Understanding these constructions enriches our ability to analyze and work with spaces
          of varying complexity.
        </p>
      </section>
    </div>
  );
};

export default CompactificationsPage;
