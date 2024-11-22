import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Compactness = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold  mb-4">
        Chapter 16: Compactness
      </h1>
      <hr className="my-6" />

      <section>
        <h2 className="text-xl font-semibold  mt-6">
          1. Motivation
        </h2>
        <p className="mt-4 ">
          Compactness is a cornerstone concept in topology. While metrizability
          is beloved for its analytical properties, compactness is cherished
          for the elegant and powerful proofs it enables. Compact spaces often
          behave like finite sets in essential ways, allowing us to simplify
          and concretize arguments that would otherwise involve cumbersome
          infinite structures.
        </p>
        <p className="mt-4 ">
          In simple terms, compactness lets us manage infinite collections of
          open sets by showing that only a finite subset of these sets is
          necessary to cover the space. This finite-like behavior has profound
          implications: compact spaces support finding maxima and minima
          (rather than suprema and infima) and ensure intersections of "all
          open sets" reduce to manageable subsets.
        </p>
        <p className="mt-4 ">
          To illustrate its utility, we’ll explore the{" "}
          <strong>Heine-Borel Theorem</strong>, which characterizes compact
          subsets of <InlineMath math="\mathbb{R}^n" />, a result foundational
          in analysis. Compactness, as we’ll see, bridges the abstract world of
          topology with the concrete world of analysis.
        </p>
      </section>
      <hr className="my-6" />

      <section>
        <h2 className="text-xl font-semibold  mt-6">
          2. Basic Definitions and Examples
        </h2>

        <h3 className="text-lg font-medium  mt-4">
          2.1 Definition of Open Covers and Compactness
        </h3>
        <p className="mt-4 ">
          Let’s start with the fundamental definitions:
        </p>
        <p className="mt-4 ">
          <strong>Definition 2.1:</strong> Let{" "}
          <InlineMath math="(X, T)" /> be a topological space.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2 ">
          <li>
            A collection <InlineMath math="\mathcal{U} \subseteq T" /> of open
            sets is called an <strong>open cover</strong> of{" "}
            <InlineMath math="X" /> if{" "}
            <InlineMath math="X = \bigcup_{U \in \mathcal{U}} U" />.
          </li>
          <li>
            If a subset <InlineMath math="\mathcal{V} \subseteq \mathcal{U}" />{" "}
            is also an open cover of <InlineMath math="X" />, we call{" "}
            <InlineMath math="\mathcal{V}" /> a <strong>subcover</strong> of{" "}
            <InlineMath math="\mathcal{U}" />.
          </li>
        </ul>
        <p className="mt-4 ">
          <strong>Definition 2.3:</strong> A topological space{" "}
          <InlineMath math="(X, T)" /> is said to be <strong>compact</strong> if{" "}
          <strong>every</strong> open cover of <InlineMath math="X" /> has a{" "}
          <strong>finite subcover</strong>.
        </p>
        <p className="mt-4 ">
          To simplify:
          <ul className="list-disc list-inside space-y-2 mt-2 ">
            <li>
              An open cover ensures that every point in{" "}
              <InlineMath math="X" /> lies in at least one set in the cover.
            </li>
            <li>
              Compactness ensures that from any (potentially infinite) open
              cover, we can extract a <strong>finite</strong> collection of sets
              that still covers <InlineMath math="X" />.
            </li>
          </ul>
        </p>
      </section>
      <hr className="my-6" />

      <section>
        <h3 className="text-lg font-medium  mt-4">
          2.2 Examples of Covers and Compactness
        </h3>
        <p className="mt-4 ">
          Let’s examine some examples to deepen our understanding:
        </p>
        <p className="mt-4 ">
          <strong>Example 2.2:</strong> Covers in{" "}
          <InlineMath math="\mathbb{R}" />
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2 ">
          <li>
            <InlineMath math="\mathcal{U}_1 = \{ (-x, x) : x > 0 \}" />
            <br />
            - This is an <strong>uncountable cover</strong> of{" "}
            <InlineMath math="\mathbb{R}" />.
            <br />- A subcover{" "}
            <InlineMath math="\mathcal{V}_1 = \{ (-n, n) : n \in \mathbb{N} \}" />{" "}
            works, but no <strong>finite</strong> subcover exists.
          </li>
          <li>
            <InlineMath math="\mathcal{U}_2 = \{ (n, n+2) : n \in \mathbb{Z} \}" />
            <br />
            - This is a <strong>countable cover</strong>, but removing even one
            interval (e.g., <InlineMath math="(6, 8)" />) leaves points (e.g.,{" "}
            <InlineMath math="7" />) uncovered. Hence, no subcovers exist.
          </li>
        </ul>
      </section>
      <hr className="my-6" />

      <p className="mt-4 ">
          <strong>Example 2.6:</strong> Compactness in Specific Spaces
        </p>
      <ul className="list-disc ml-6">
        <li>
          <strong>Discrete Spaces:</strong> If <InlineMath math="X" /> is finite, 
          <InlineMath math="(X, T_\text{discrete})" /> is compact because every open cover trivially reduces to a finite subcover.
        </li>
        <li>
          <strong>Intervals in <InlineMath math="\mathbb{R}" />:</strong>
          <ul className="list-disc ml-6">
            <li>
              <InlineMath math="[0, 1]" /> with its usual topology is compact.
            </li>
            <li>
              <InlineMath math="(0, 1)" /> is not compact because it cannot have a finite subcover for typical open covers like 
              <InlineMath math="\{ (0, 1-\frac{1}{n}) : n \in \mathbb{N} \}" />.
            </li>
          </ul>
        </li>
        <li>
          <strong>Order Topologies:</strong>
          <ul className="list-disc ml-6">
            <li>
              The set <InlineMath math="\omega+1" /> is compact, as any open cover must include a set containing the top point 
              <InlineMath math="\omega" />, and finitely many additional sets suffice to cover the remainder.
            </li>
            <li>
              In contrast, <InlineMath math="\omega_1" /> (the first uncountable ordinal) is not compact.
            </li>
          </ul>
        </li>
      </ul>
      <hr className="my-6" />

      <h3 className="text-lg font-medium  mt-4">2.3 Lindelöf Spaces</h3>
      <p>
        Compactness has a close relative: the Lindelöf property.
      </p>
      <blockquote className="border-l-4 pl-4 italic">
        <strong>Definition 2.4:</strong> A space <InlineMath math="(X, T)" /> is <strong>Lindelöf</strong> if every open cover of 
        <InlineMath math="X" /> has a <strong>countable</strong> subcover.
      </blockquote>
      <p>
        All compact spaces are Lindelöf, but not all Lindelöf spaces are compact. For example:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <InlineMath math="\mathbb{R}^n" /> with its usual topology is Lindelöf but not compact.
        </li>
      </ul>
      <hr className="my-6" />

      <h3 className="text-lg font-medium  mt-4">3. Basic Results About Compactness</h3>

      <h4 className="text-lg font-medium mt-6">3.1 Continuous Images of Compact Spaces</h4>
      <blockquote className="border-l-4 pl-4 italic">
        <strong>Proposition 3.1:</strong> If <InlineMath math="f : X \to Y" /> is a continuous surjection and 
        <InlineMath math="X" /> is compact, then <InlineMath math="Y" /> is also compact.
      </blockquote>
      <p>
        <strong>Proof:</strong> Let <InlineMath math="\mathcal{U}" /> be an open cover of 
        <InlineMath math="Y" />. The preimages of sets in <InlineMath math="\mathcal{U}" /> form an open cover of 
        <InlineMath math="X" /> because <InlineMath math="f" /> is continuous. Since <InlineMath math="X" /> is compact, 
        there exists a finite subcover of preimages. The corresponding sets in <InlineMath math="\mathcal{U}" /> form a finite 
        subcover of <InlineMath math="Y" />, proving compactness.
      </p>
      <hr className="my-6" />

      <h4 className="text-lg font-medium mt-6">3.2 Compactness and Subspaces</h4>
      <blockquote className="border-l-4 pl-4 italic">
        <strong>Proposition 3.2:</strong> If <InlineMath math="C \subseteq X" /> is a closed subset of a compact space 
        <InlineMath math="X" />, then <InlineMath math="C" /> is compact.
      </blockquote>
      <p>
        <strong>Proof Sketch:</strong> Any open cover of <InlineMath math="C" /> can be extended to an open cover of 
        <InlineMath math="X" /> by adding <InlineMath math="X \setminus C" />. Compactness of <InlineMath math="X" /> ensures 
        a finite subcover exists, which reduces to a finite cover of <InlineMath math="C" />.
      </p>
      <hr className="my-6" />

      <h4 className="text-lg font-medium mt-6">3.3 Compact Hausdorff Spaces</h4>
      <blockquote className="border-l-4 pl-4 italic">
        <strong>Proposition 3.5:</strong> A compact Hausdorff space is regular.
      </blockquote>
      <blockquote className="border-l-4 pl-4 italic">
        <strong>Proposition 3.6:</strong> A compact Hausdorff space is normal.
      </blockquote>
      <p>
        Compactness ensures that certain constructions, such as separating disjoint closed sets with open sets, can be carried 
        out in a Hausdorff space. This facilitates results like the <strong>Urysohn Lemma</strong> and the 
        <strong>Tietze Extension Theorem</strong>.
      </p>
      <hr className="my-6" />

      <h2 className="text-xl font-semibold  mt-6">4. The Heine-Borel Theorem</h2>
      <p>
        One of the most celebrated results involving compactness is the <strong>Heine-Borel Theorem</strong>:
      </p>
      <blockquote className="border-l-4 pl-4 italic">
        <strong>Theorem:</strong> A subset of <InlineMath math="\mathbb{R}^n" /> is compact (in the usual topology) if and only if it is 
        <strong>closed</strong> and <strong>bounded</strong>.
      </blockquote>
      <h3 className="text-lg font-medium  mt-4">Proof Outline:</h3>
      <ol className="list-decimal ml-6">
        <li>
          <strong>Necessity:</strong>
          <ul className="list-disc ml-6">
            <li>
              A compact set must be bounded (otherwise, an unbounded cover like <InlineMath math="(-n, n)" /> cannot have a finite subcover).
            </li>
            <li>
              A compact set must be closed because accumulation points outside the set would contradict the definition of compactness.
            </li>
          </ul>
        </li>
        <li>
          <strong>Sufficiency:</strong>
          <ul className="list-disc ml-6">
            <li>
              A closed and bounded set can be shown to have a finite subcover for any open cover using the Bolzano-Weierstrass Theorem and the properties of 
              <InlineMath math="\mathbb{R}^n" />.
            </li>
          </ul>
        </li>
      </ol>
      <hr className="my-6" />

      <h2 className="text-xl font-semibold  mt-6">5. Applications of Compactness</h2>
      <ol className="list-decimal ml-6">
        <li>
          <strong>Maximum and Minimum Theorems:</strong> Continuous functions on compact spaces achieve their maxima and minima.
        </li>
        <li>
          <strong>Intersection of Closed Sets:</strong> In a compact space, the intersection of any family of closed sets with the finite intersection property is nonempty.
        </li>
        <li>
          <strong>Extreme Value Theorem:</strong> A continuous function on a compact set is bounded and attains its bounds.
        </li>
      </ol>
      <hr className="my-6" />

      <p className="mt-6">
        Compactness is a profound property that simplifies otherwise intricate arguments and connects abstract topology to practical analysis. 
        By studying compact spaces, we unlock tools and insights that extend far beyond their definitions.
      </p>
      </div>
  );
};

export default Compactness;
