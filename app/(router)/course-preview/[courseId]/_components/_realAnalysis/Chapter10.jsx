import { BlockMath, InlineMath } from 'react-katex';

const MetricSpaces = () => (
  <div className="p-8 space-y-8">
    <section>
      <h2 className="text-2xl font-bold">Chapter 10: Open and Closed Sets, Limit Points, and the Concept of Density in Metric Spaces</h2>
      <hr className="my-4" />

      <p className="text-gray-700">
        In this chapter, we dive into foundational concepts of open and closed sets, limit points, and density within the framework of metric spaces. These concepts play a central role in analysis and topology, forming the backbone of much of modern mathematics. We'll build up our understanding step by step, exploring definitions, properties, and examples to solidify our grasp on these topics.
      </p>
    </section>

    <section>
      <h3 className="text-xl font-semibold">1. Limit Points</h3>
      <p className="text-gray-700">
        We begin by discussing <strong>limit points</strong>, a fundamental notion in the study of topological spaces. Informally, a limit point of a set <InlineMath>{String.raw`E`}</InlineMath> is a point where, no matter how small a neighborhood (or ball) we consider around it, we find points of <InlineMath>{String.raw`E`}</InlineMath> arbitrarily close.
      </p>

      <h4 className="font-semibold mt-4">1.1 Definition of a Limit Point</h4>
      <p className="text-gray-700">
        Let <InlineMath>{String.raw`(X, d)`}</InlineMath> be a metric space, and let <InlineMath>{String.raw`E \subseteq X`}</InlineMath>. A point <InlineMath>{String.raw`p \in X`}</InlineMath> is called a <strong>limit point</strong> of <InlineMath>{String.raw`E`}</InlineMath> if:
      </p>
      <BlockMath>{String.raw`\forall r > 0, \; (B_r(p) \setminus \{p\}) \cap E \neq \emptyset.`}</BlockMath>

      <p className="text-gray-700">
        This means that for every radius <InlineMath>{String.raw`r > 0`}</InlineMath>, the open ball around <InlineMath>{String.raw`p`}</InlineMath>, excluding <InlineMath>{String.raw`p`}</InlineMath> itself, contains at least one point of <InlineMath>{String.raw`E`}</InlineMath>.
      </p>

      <h4 className="font-semibold mt-4">1.2 Key Insight</h4>
      <p className="text-gray-700">
        Every point in a metric space <InlineMath>{String.raw`X`}</InlineMath> can be considered a limit point of the set of rational numbers <InlineMath>{String.raw`\mathbb{Q}`}</InlineMath> within <InlineMath>{String.raw`X`}</InlineMath>. Why? Given any real number <InlineMath>{String.raw`p \in \mathbb{R}`}</InlineMath> and any small ball around <InlineMath>{String.raw`p`}</InlineMath>, there are infinitely many rational numbers within that ball. Therefore, all points in <InlineMath>{String.raw`\mathbb{R}`}</InlineMath> are limit points of <InlineMath>{String.raw`\mathbb{Q}`}</InlineMath>.
      </p>
    </section>
    <hr className="my-4" />


    <section>
      <h3 className="text-xl font-semibold">2. Isolated Points</h3>
      <p className="text-gray-700">
        In contrast to limit points, <strong>isolated points</strong> of a set <InlineMath>{String.raw`E`}</InlineMath> are those that stand alone, in a sense.
      </p>

      <h4 className="font-semibold mt-4">2.1 Definition of an Isolated Point</h4>
      <p className="text-gray-700">
        A point <InlineMath>{String.raw`p \in E`}</InlineMath> is called <strong>isolated</strong> if there exists a radius <InlineMath>{String.raw`r > 0`}</InlineMath> such that:
      </p>
      <BlockMath>{String.raw`B_r(p) \cap E = \{p\}.`}</BlockMath>

      <p className="text-gray-700">
        This means that there is some neighborhood around <InlineMath>{String.raw`p`}</InlineMath> containing no other points of <InlineMath>{String.raw`E`}</InlineMath> except <InlineMath>{String.raw`p`}</InlineMath> itself.
      </p>

      <h4 className="font-semibold mt-4">2.2 Example: Rational Numbers</h4>
      <p className="text-gray-700">
        The set of rational numbers <InlineMath>{String.raw`\mathbb{Q}`}</InlineMath> has no isolated points when considered as a subset of <InlineMath>{String.raw`\mathbb{R}`}</InlineMath>. Any ball around a rational number contains infinitely many other rationals.
      </p>
    </section>
    <hr className="my-4" />

    <section>
      <h3 className="text-xl font-semibold">3. Theorem: Limit Points and Infinite Neighborhoods</h3>
      <p className="text-gray-700">
        An essential property of limit points is tied to the idea of infinite density around these points.
      </p>

      <h4 className="font-semibold mt-4">Theorem</h4>
      <p className="text-gray-700">
        If <InlineMath>{String.raw`p`}</InlineMath> is a limit point of a set <InlineMath>{String.raw`E`}</InlineMath>, then <strong>every neighborhood of <InlineMath>{String.raw`p`}</InlineMath></strong> contains <strong>infinitely many points</strong> of <InlineMath>{String.raw`E`}</InlineMath>.
      </p>

      <h4 className="font-semibold mt-4">Proof by Contradiction</h4>
      <ol className="list-decimal pl-8 space-y-2 text-gray-700">
        <li>
          <span className="font-semibold">Assumption:</span> Suppose <InlineMath>{String.raw`B_r(p)`}</InlineMath> contains only the points <InlineMath>{String.raw`e_1, e_2, \ldots, e_n`}</InlineMath> from <InlineMath>{String.raw`E`}</InlineMath>.
        </li>
        <li>
          Compute the minimum distance from <InlineMath>{String.raw`p`}</InlineMath> to these points:
          <BlockMath>{String.raw`R = \min \{ d(p, e_1), d(p, e_2), \ldots, d(p, e_n) \}.`}</BlockMath>
        </li>
        <li>
          <InlineMath>{String.raw`R`}</InlineMath> is positive because we assumed only finitely many points.
        </li>
        <li>
          Consider the smaller ball <InlineMath>{String.raw`B_{R/2}(p)`}</InlineMath>. By definition, this ball cannot contain any of the points <InlineMath>{String.raw`e_1, e_2, \ldots, e_n`}</InlineMath>, nor can it contain any other points of <InlineMath>{String.raw`E`}</InlineMath>.
        </li>
      </ol>
      <p className="text-gray-700">
        This contradicts the assumption that <InlineMath>{String.raw`p`}</InlineMath> is a limit point of <InlineMath>{String.raw`E`}</InlineMath>. Hence, our initial assumption must be false, and the theorem is proven.
      </p>
    </section>

    <hr className="my-4" />

    <h3 className="text-xl font-semibold mb-2">4. Open Sets</h3>
      <p className="mb-4">
        We now shift our focus to <strong>open sets</strong>, one of the most critical ideas in topology and analysis.
      </p>
      <h4 className="text-lg font-semibold mb-2">4.1 Definition of an Open Set</h4>
      <p className="mb-4">
        A set <InlineMath math="E \subseteq X" /> in a metric space <InlineMath math="(X, d)" /> is called{' '}
        <strong>open</strong> if:
      </p>
      <BlockMath math="\forall p \in E, \; \exists r > 0 \; \text{such that} \; B_r(p) \subseteq E." />
      <p className="mb-4">
        In other words, for every point <InlineMath math="p \in E" />, there exists a neighborhood entirely
        contained within <InlineMath math="E" />.
      </p>

      <h4 className="text-lg font-semibold mb-2">4.2 Examples</h4>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Open Intervals</strong>: The set <InlineMath math="(a, b)" /> on the real line is open. For any{' '}
          <InlineMath math="x \in (a, b)" />, a small ball around <InlineMath math="x" /> will still be within{' '}
          <InlineMath math="(a, b)" />.
        </li>
        <li>
          <strong>The Empty Set</strong>: The empty set <InlineMath math="\emptyset" /> is trivially open, as there
          are no points to violate the openness condition.
        </li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">5. Closed Sets</h3>
      <p className="mb-4">
        The concept of <strong>closed sets</strong> complements open sets.
      </p>
      <h4 className="text-lg font-semibold mb-2">5.1 Definition of a Closed Set</h4>
      <p className="mb-4">
        A set <InlineMath math="E \subseteq X" /> is called <strong>closed</strong> if it contains all its limit
        points. That is:
      </p>
      <BlockMath math="p \text{ is a limit point of } E \implies p \in E." />

      <h4 className="text-lg font-semibold mb-2">5.2 Examples</h4>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Closed Intervals</strong>: The interval <InlineMath math="[a, b]" /> is closed because it contains
          all its limit points, including the endpoints <InlineMath math="a" /> and <InlineMath math="b" />.
        </li>
        <li>
          <strong>Single Points</strong>: Any set consisting of a single point, such as <InlineMath math="\{p\}" />,
          is closed since it trivially contains all its limit points (which are none).
        </li>
        <li>
          <strong>The Empty Set and </strong> <InlineMath math="\mathbb{R}" />: Both the empty set and the entire
          real line are closed sets.
        </li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">6. Open vs. Closed Sets</h3>
      <p className="mb-4">
        It's crucial to note that a set being open does not imply it isn't closed, and vice versa. Some sets can be:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Both open and closed</strong>: Examples include <InlineMath math="\emptyset" /> and{' '}
          <InlineMath math="\mathbb{R}" />.
        </li>
        <li>
          <strong>Neither open nor closed</strong>: For instance, the half-open interval{' '}
          <InlineMath math="[a, b)" />.
        </li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-xl font-semibold mb-2">7. Closure of a Set</h3>
      <p className="mb-4">
        Finally, we introduce the idea of the <strong>closure</strong> of a set, which ensures that a set contains all
        its limit points.
      </p>
      <h4 className="text-lg font-semibold mb-2">7.1 Definition of Closure</h4>
      <p className="mb-4">
        The <strong>closure</strong> of a set <InlineMath math="E" />, denoted <InlineMath math="\overline{E}" />,
        is defined as:
      </p>
      <BlockMath math="\overline{E} = E \cup E'" />
      <p className="mb-4">
        where <InlineMath math="E'" /> is the set of all limit points of <InlineMath math="E" />.
      </p>

      <h4 className="text-lg font-semibold mb-2">7.2 Example</h4>
      <p className="mb-6">
        Consider the open interval <InlineMath math="(a, b)" />. Its closure{' '}
        <InlineMath math="\overline{(a, b)}" /> is the closed interval <InlineMath math="[a, b]" />, as{' '}
        <InlineMath math="a" /> and <InlineMath math="b" /> are limit points.
      </p>

      <hr className="my-4" />
      <h3 className="text-xl font-semibold mb-2">8. Dense Sets</h3>
      <p className="mb-4">
        A set <InlineMath math="E" /> is called <strong>dense</strong> in <InlineMath math="X" /> if:
      </p>
      <BlockMath math="\overline{E} = X." />
      <p className="mb-4">
        This means that every point in <InlineMath math="X" /> is either in <InlineMath math="E" /> or is a limit
        point of <InlineMath math="E" />.
      </p>

      <h4 className="text-lg font-semibold mb-2">Example: The Rational Numbers</h4>
      <p className="mb-6">
        The rationals <InlineMath math="\mathbb{Q}" /> are dense in <InlineMath math="\mathbb{R}" /> because every
        real number is either rational or can be approached arbitrarily closely by rationals.
      </p>

      <hr className="my-4" />
      <h3 className="text-xl font-semibold mb-2">Summary</h3>
      <p className="mb-2">In this chapter, we explored essential concepts:</p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Limit Points</strong>: Points around which a set is infinitely dense.
        </li>
        <li>
          <strong>Open Sets</strong>: Sets where every point has a neighborhood entirely contained within.
        </li>
        <li>
          <strong>Closed Sets</strong>: Sets containing all their limit points.
        </li>
        <li>
          <strong>Closure</strong>: The smallest closed set containing a given set.
        </li>
        <li>
          <strong>Dense Sets</strong>: Sets that "fill" the space in which they lie.
        </li>
      </ul>
      <p className="mb-4">
        These ideas provide a framework for analyzing continuity, convergence, and topological structure in metric
        spaces.
      </p>
  </div>
);

export default MetricSpaces;
