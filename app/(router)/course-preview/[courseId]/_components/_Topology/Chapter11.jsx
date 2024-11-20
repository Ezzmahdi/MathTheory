import { InlineMath, BlockMath } from "react-katex";

export default function ZornsLemma() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Chapter 12: The Axiom of Choice</h1>
      <hr className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold">Introduction to Zorn’s Lemma</h2>
        <p>
          Zorn’s Lemma is a cornerstone of set theory and mathematics. It states
          that if a partially ordered set <InlineMath math="P" /> has the property
          that every chain (a totally ordered subset) in <InlineMath math="P" /> has an
          upper bound in <InlineMath math="P" />, then <InlineMath math="P" /> contains at
          least one maximal element. A maximal element is an element{' '}
          <InlineMath math="m \in P" /> such that no element of <InlineMath math="P" /> strictly
          contains <InlineMath math="m" /> (in the sense of the order relation). While seemingly
          abstract, Zorn’s Lemma has numerous applications, particularly in proving
          the existence of mathematical objects without explicitly constructing them.
        </p>
        <p>
          Zorn’s Lemma is equivalent to the Axiom of Choice (AC), which is a
          foundational principle in mathematics asserting that given a collection of
          non-empty sets, it is possible to select one element from each set. This
          equivalence demonstrates the non-constructive nature of Zorn’s Lemma: it
          guarantees existence without providing a concrete method for finding the
          maximal element.
        </p>
      </section>

      <hr className="my-6" />

      <section>
        <h2 className="text-2xl font-semibold">Application 1: ω₁ and the Countable Chain Condition (CCC)</h2>
        <p>
          One of the elegant uses of Zorn’s Lemma is in topology, specifically in
          proving that the first uncountable ordinal, <InlineMath math="\omega_1" />, does{' '}
          <strong>not</strong> satisfy the <strong>countable chain condition</strong> (CCC). The
          CCC states that every collection of disjoint non-empty open subsets of a
          space is at most countable. To show this, we construct a partial order and
          apply Zorn’s Lemma to find a collection that witnesses the failure of the
          CCC.
        </p>
        <hr className="my-6" />

        <h3 className="text-lg font-semibold mt-4">1. Setting Up the Partial Order</h3>
        <p>
          Let <InlineMath math="T" /> be the order topology on <InlineMath math="\omega_1" />,
          which consists of open intervals of ordinals. Define{' '}
          <InlineMath math="U" /> as the collection of all <strong>countable</strong>{' '}
          non-empty open subsets of <InlineMath math="\omega_1" />. Then define a partially
          ordered set <InlineMath math="P" />:
        </p>
        <BlockMath math="P = \{ A \subseteq U : A \text{ is a collection of mutually disjoint subsets} \}." />
        <p>
          The partial order on <InlineMath math="P" /> is set inclusion,{' '}
          <InlineMath math="A \subseteq B" />. Intuitively, <InlineMath math="P" /> consists of
          sets of countable open subsets of <InlineMath math="\omega_1" /> that are
          mutually disjoint. The goal is to find a maximal element of{' '}
          <InlineMath math="P" /> that is <strong>uncountable</strong>, thereby demonstrating
          the failure of the CCC.
        </p>
        <hr className="my-6" />

        <h3 className="text-lg font-semibold mt-4">2. Why Countable Open Sets?</h3>
        <p>
          The restriction to countable open sets ensures that any maximal element
          of <InlineMath math="P" /> cannot trivially satisfy the CCC. For example, if we
          allowed uncountable open sets, a maximal element could simply include{' '}
          <InlineMath math="\omega_1" /> itself as a single open set, which does not
          contradict the CCC.
        </p>
        <hr className="my-6" />

        <h3 className="text-lg font-semibold mt-4">
          3. Claim: Any Maximal Element of <InlineMath math="P" /> is Uncountable
        </h3>
        <p>
          Suppose <InlineMath math="M \in P" /> is maximal (i.e., no larger element
          exists). If <InlineMath math="M" /> were countable, we could construct a
          contradiction:
        </p>
        <ul className="list-disc ml-8">
          <li>
            Since <InlineMath math="M" /> is countable and consists of countable
            sets, their union, <InlineMath math="S_M" />, is countable.
          </li>
          <li>
            Choose an ordinal <InlineMath math="\alpha \in \omega_1" /> that is not
            in <InlineMath math="S_M" />. By the definition of <InlineMath math="\omega_1" />, such
            an <InlineMath math="\alpha" /> always exists.
          </li>
          <li>
            Construct a new countable open set{' '}
            <InlineMath math="U" /> above <InlineMath math="\alpha" />, for instance,{' '}
            <InlineMath math="(\alpha, \alpha + 1]" />.
          </li>
          <li>
            The set <InlineMath math="M \cup \{U\}" /> is still a collection of
            mutually disjoint open sets, contradicting the maximality of{' '}
            <InlineMath math="M" />.
          </li>
        </ul>
        <p>
          Therefore, any maximal element <InlineMath math="M" /> must be uncountable.
        </p>
        <hr className="my-6" />

        <h3 className="text-lg font-semibold mt-4">4. Verifying Zorn’s Lemma</h3>
        <p>
          To use Zorn’s Lemma, we must verify that every chain{' '}
          <InlineMath math="C \subseteq P" /> has an upper bound in{' '}
          <InlineMath math="P" />.
        </p>
        <ul className="list-disc ml-8">
          <li>
            Let <InlineMath math="C" /> be a chain in <InlineMath math="P" />, meaning
            every pair of elements in <InlineMath math="C" /> is comparable by
            inclusion. Define{' '}
            <InlineMath math="X = \bigcup C" />, the union of all sets in{' '}
            <InlineMath math="C" />.
          </li>
          <li>
            By construction, <InlineMath math="X" /> is a set of mutually disjoint
            countable open subsets of <InlineMath math="\omega_1" /> and is therefore
            an upper bound for <InlineMath math="C" />.
          </li>
        </ul>
        <p>
          Thus, <InlineMath math="P" /> satisfies the hypothesis of Zorn’s Lemma,
          guaranteeing a maximal element.
        </p>
        <p>
          By the argument above, a maximal element of <InlineMath math="P" /> provides
          an uncountable collection of mutually disjoint non-empty open subsets of{' '}
          <InlineMath math="\omega_1" />, proving that <InlineMath math="\omega_1" /> is
          not CCC.
        </p>
      </section>
      <hr className="my-6" />

      <h3 className="text-xl font-bold mb-4">Application 2: Maximal Ideals in Rings</h3>
      <p>
        Another classical application of Zorn’s Lemma is in ring theory, where it proves the existence of maximal ideals
        in commutative rings. An <strong>ideal</strong> <InlineMath math="I" /> in a ring <InlineMath math="R" /> is a
        subset that absorbs multiplication by elements of <InlineMath math="R" /> and is closed under addition. A
        maximal ideal <InlineMath math="M" /> is an ideal that is not properly contained in any other ideal except{" "}
        <InlineMath math="R" /> itself.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-4 mb-2">1. Constructing the Partial Order</h3>
      <p>
        Fix an ideal <InlineMath math="I \subseteq R" />. Define the partially ordered set:
      </p>
      <BlockMath
        math="P = \{ J \subseteq R : J \text{ is an ideal and } I \subseteq J \},"
      />
      <p>
        with inclusion <InlineMath math="\subseteq" /> as the partial order.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-4 mb-2">2. Using Zorn’s Lemma</h3>
      <ul className="list-disc ml-8">
        <li>
          <strong>Non-Empty:</strong> <InlineMath math="P" /> contains at least <InlineMath math="I" />, so it is
          non-empty.
        </li>
        <li>
          <strong>Chains Have Upper Bounds:</strong> For any chain{" "}
          <InlineMath math="C \subseteq P" />, define{" "}
          <InlineMath math="X = \bigcup C" />. The union of ideals is again an ideal, making{" "}
          <InlineMath math="X" /> an upper bound for <InlineMath math="C" />.
        </li>
      </ul>
      <p>
        By Zorn’s Lemma, <InlineMath math="P" /> has a maximal element, which is a maximal ideal in{" "}
        <InlineMath math="R" />.
      </p>
      <p>
        This result is foundational in algebra, particularly in the study of algebraic structures and the construction
        of fields.
      </p>
      <hr className="my-6" />
      <h2 className="text-2xl font-bold mb-4">Broader Equivalences of the Axiom of Choice</h2>
      <p>
        Zorn’s Lemma is one of many equivalent formulations of the Axiom of Choice. Here are a few notable equivalences:
      </p>
      <ol className="list-decimal ml-8">
        <li><strong>Well-Ordering Theorem:</strong> Every set can be well-ordered.</li>
        <li><strong>Tychonoff’s Theorem:</strong> The product of compact topological spaces is compact.</li>
        <li><strong>Vector Space Basis:</strong> Every vector space has a basis.</li>
        <li><strong>Algebraic Closure:</strong> Every field has an algebraic closure.</li>
        <li><strong>Maximal Ideals:</strong> Every non-trivial ring has a maximal ideal.</li>
        <li><strong>Surjective Functions:</strong> Every surjection has a right inverse.</li>
      </ol>
      <p>
        Each equivalence demonstrates how the Axiom of Choice (or Zorn’s Lemma) underpins much of modern mathematics.
        For instance, in topology, the Tychonoff Theorem is central to compactness, while in algebra, the existence of a
        vector space basis is crucial for linear algebra.
      </p>
      <hr className="my-6" />
      <h2 className="text-2xl font-bold mb-4">Consequences of the Axiom of Choice</h2>
      <p>
        The Axiom of Choice has far-reaching implications, enabling results that are often non-constructive. Some
        notable consequences include:
      </p>
      <ul className="list-disc ml-8">
        <li>
          <strong>The Banach-Tarski Paradox:</strong> A sphere can be split into finitely many pieces and reassembled
          into two spheres of the same size.
        </li>
        <li>
          Every filter is contained in an ultrafilter.
        </li>
        <li>
          Non-measurable subsets of <InlineMath math="\mathbb{R}^n" /> exist, meaning some sets defy conventional
          notions of "size" or "volume."
        </li>
      </ul>
      <p>
        These results highlight the power—and sometimes counterintuitive nature—of the Axiom of Choice and its
        equivalents like Zorn’s Lemma.
      </p>
      <hr className="my-6" />
      <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
      <p>
        Zorn’s Lemma is a powerful tool in mathematics, providing a unified way to prove the existence of maximal
        elements in partially ordered sets. Through its applications in topology, algebra, and beyond, it underscores
        the foundational role of the Axiom of Choice in modern mathematics. While abstract, its use in proving results
        like the failure of the CCC for <InlineMath math="\omega_1" /> or the existence of maximal ideals showcases its
        elegance and versatility. Understanding Zorn’s Lemma opens doors to deeper insights across mathematical
        disciplines.
      </p>
    </div>
  );
}
