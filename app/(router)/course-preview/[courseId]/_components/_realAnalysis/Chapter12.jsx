import { InlineMath } from 'react-katex';

const CompactClosedsets = () => {
  return (
    <div className="px-6 py-8">
      {/* Chapter Title */}
      <h1 className="text-3xl font-bold mb-4">Chapter 12: Compactness and Related Theorems</h1>
      <hr className="my-4" />

      <p className="mb-6">
        Compactness is one of the central concepts in topology and analysis. It helps us understand when we can make
        seemingly infinite problems manageable by working with finite subsets. This chapter dives deep into compactness,
        covering its definitions, properties, and implications.
      </p>
      
      <hr className="my-4" />
      <h2 className="text-2xl font-semibold mb-4">Part 1: The Basics of Compactness</h2>

      <h3 className="text-xl font-semibold mb-2">What is Compactness?</h3>
      <p className="mb-4">
        Compactness is a generalization of the concept of closed and bounded intervals in <InlineMath math="\mathbb{R}" />. Here’s the intuition:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>A set is <strong>compact</strong> if you can cover it with a bunch of open sets and still find a <strong>finite number</strong> of those open sets that do the same job.</li>
      </ul>

      <p className="mb-4">
        <strong>Formal Definition of Compactness:</strong>
      </p>
      <p className="mb-4">
        A set <InlineMath math="K \subseteq \mathbb{R}^n" /> is <strong>compact</strong> if every open cover of <InlineMath math="K" /> has a <strong>finite subcover</strong>.
      </p>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">Open Cover and Finite Subcover:</h3>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Open Cover:</strong> A collection of open sets <InlineMath math="\{U_\alpha\}" /> is an <strong>open cover</strong> of <InlineMath math="K" /> if:
          <InlineMath math="K \subseteq \bigcup_{\alpha} U_\alpha" />
        </li>
        <li><strong>Finite Subcover:</strong> A <strong>finite subcover</strong> is a smaller, finite collection of open sets <InlineMath math="\{U_{\alpha_1}, U_{\alpha_2}, \dots, U_{\alpha_n}\}" /> such that:
          <InlineMath math="K \subseteq U_{\alpha_1} \cup U_{\alpha_2} \cup \dots \cup U_{\alpha_n}" />
        </li>
      </ul>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">Examples of Compact Sets</h3>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Closed and Bounded Interval in <InlineMath math="\mathbb{R}" />:</strong> <InlineMath math="[0, 1]" /> is compact. Given any open cover of <InlineMath math="[0, 1]" />, you can always find a finite subcover.</li>
        <li><strong>Non-Compact Sets:</strong> The interval <InlineMath math="(0, 1)" /> is <strong>not compact</strong> because you could use open sets like <InlineMath math="\{(0, 1 - \frac{1}{n})\}" /> which cover <InlineMath math="(0, 1)" />, but no finite subcover would work.</li>
      </ul>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">Key Theorems</h3>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Heine-Borel Theorem:</strong> A subset of <InlineMath math="\mathbb{R}^n" /> is compact <strong>if and only if</strong> it is <strong>closed</strong> and <strong>bounded</strong>.</li>
      </ul>

      <hr className="my-4" />
      <h2 className="text-2xl font-semibold mb-4">Part 2: Properties of Compact Sets</h2>

      <h3 className="text-xl font-semibold mb-2">Compact Sets are Closed and Bounded</h3>
      <p className="mb-4">
        Let’s dig into why compactness implies closedness and boundedness.
      </p>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">Boundedness of Compact Sets</h3>
      <p className="mb-4">
        <strong>Bounded Set:</strong> A set <InlineMath math="K" /> is bounded if there exists some real number <InlineMath math="M > 0" /> such that every point <InlineMath math="x \in K" /> satisfies <InlineMath math="\|x\| < M" />.
      </p>

      <h3 className="text-xl font-semibold mb-2">Proof:</h3>
      <p className="mb-4">
        Suppose <InlineMath math="K" /> is compact. If <InlineMath math="K" /> were not bounded, you could create an open cover using "expanding spheres," like:
      </p>
      <p className="mb-4">
        <InlineMath math="U_n = \{x \in \mathbb{R}^n : \|x\| < n\}" />
      </p>
      <p className="mb-4">
        Clearly, <InlineMath math="\{U_n\}" /> covers all of <InlineMath math="\mathbb{R}^n" />, but any finite number of these cannot cover <InlineMath math="K" />, which contradicts compactness.
      </p>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">Closedness of Compact Sets</h3>
      <p className="mb-4">
        <strong>Closed Set:</strong> A set <InlineMath math="K" /> is closed if it contains all its <strong>limit points</strong>.
      </p>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">Proof:</h3>
      <p className="mb-4">
        Let <InlineMath math="x" /> be a limit point of <InlineMath math="K" />. Assume <InlineMath math="x \notin K" />. Then the open cover <InlineMath math="\{U_\alpha = K^c, \text{and some other cover of } K\}" /> will fail to have a finite subcover for <InlineMath math="K" />, contradicting compactness.
      </p>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">Compact Sets and Continuity</h3>

      <h3 className="text-xl font-semibold mb-2">Continuous Functions Preserve Compactness</h3>
      <p className="mb-4">
        If <InlineMath math="f: K \to \mathbb{R}" /> is continuous and <InlineMath math="K" /> is compact, then:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Image of Compact Set is Compact:</strong> The set <InlineMath math="f(K)" /> is also compact.</li>
        <li><strong>Extreme Value Theorem:</strong> If <InlineMath math="f: K \to \mathbb{R}" /> is continuous, then <InlineMath math="f" /> attains its <strong>maximum</strong> and <strong>minimum</strong> values on <InlineMath math="K" />. That is, there exist <InlineMath math="x_{\min}, x_{\max} \in K" /> such that:
          <InlineMath math="f(x_{\min}) \leq f(x) \leq f(x_{\max}) \quad \forall x \in K" />
        </li>
      </ul>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">Proof Sketch:</h3>
      <p className="mb-4">
        Since <InlineMath math="f" /> is continuous, and compactness ensures <InlineMath math="K" /> has limit points, every value within <InlineMath math="K" />'s range must hit the max/min.
      </p>

      <hr className="my-4" />
      <h2 className="text-2xl font-semibold mb-4">Part 3: Compact Subsets of Compact Sets</h2>

      <h3 className="text-xl font-semibold mb-2">Compact Subsets</h3>
      <p className="mb-4">
        A particularly useful property of compactness is how it behaves with subsets.
      </p>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">Theorem:</h3>
      <p className="mb-4">
        If <InlineMath math="K" /> is compact and <InlineMath math="B \subseteq K" /> is <strong>closed</strong>, then <InlineMath math="B" /> is compact.
      </p>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">Proof Outline:</h3>
      <ol className="list-decimal list-inside mb-6">
        <li>Let <InlineMath math="\{U_\alpha\}" /> be an open cover of <InlineMath math="B" />.</li>
        <li>Since <InlineMath math="B" /> is closed, the complement <InlineMath math="K \setminus B" /> is open.</li>
        <li>Combine this with <InlineMath math="U_\alpha"/> to form an open cover of <InlineMath math="K" />.</li>
        <li>By compactness of <InlineMath math="K" />, we can extract a finite subcover.</li>
        <li>This finite subcover works for <InlineMath math="B" /> alone, proving <InlineMath math="B" /> is compact.</li>
      </ol>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">Applications of Compactness</h3>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Optimization Problems:</strong> In real-world problems like maximizing profit or minimizing costs, compactness ensures solutions exist.</li>
        <li><strong>Convergence in Sequence Spaces:</strong> Compactness helps determine when sequences have limit points, aiding in the study of convergence.</li>
      </ul>
      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">Summary of Key Points</h3>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Compactness</strong> is about reducing infinite problems to finite ones.</li>
        <li>Compact sets in <InlineMath math="\mathbb{R}^n" /> are closed and bounded.</li>
        <li>Continuous functions on compact sets achieve their maximum and minimum values.</li>
        <li>Compact subsets of compact sets remain compact if they are closed.</li>
      </ul>

      <p className="mb-6">
        By understanding compactness, we gain powerful tools for solving problems across analysis and topology.
      </p>
    </div>
  );
};

export default CompactClosedsets;
