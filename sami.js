
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:phootwork" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="phootwork.html">phootwork</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:phootwork_collection" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="phootwork/collection.html">collection</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:phootwork_collection_Collection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/collection/Collection.html">Collection</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:phootwork_file" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="phootwork/file.html">file</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:phootwork_file_exception" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="phootwork/file/exception.html">exception</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:phootwork_file_exception_FileException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/file/exception/FileException.html">FileException</a>                    </div>                </li>                            <li data-name="class:phootwork_file_exception_FileNotFoundException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/file/exception/FileNotFoundException.html">FileNotFoundException</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:phootwork_json" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="phootwork/json.html">json</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:phootwork_json_Json" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/json/Json.html">Json</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:phootwork_lang" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="phootwork/lang.html">lang</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:phootwork_lang_inflector" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="phootwork/lang/inflector.html">inflector</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:phootwork_lang_inflector_InflectorInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/lang/inflector/InflectorInterface.html">InflectorInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:phootwork_lang_parts" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="phootwork/lang/parts.html">parts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:phootwork_lang_parts_AddPart" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/lang/parts/AddPart.html">AddPart</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_parts_ArrayConversionsPart" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/lang/parts/ArrayConversionsPart.html">ArrayConversionsPart</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_parts_CheckerPart" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/lang/parts/CheckerPart.html">CheckerPart</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_parts_EachPart" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/lang/parts/EachPart.html">EachPart</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_parts_InternalPart" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/lang/parts/InternalPart.html">InternalPart</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_parts_PopPart" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/lang/parts/PopPart.html">PopPart</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_parts_ReducePart" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/lang/parts/ReducePart.html">ReducePart</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_parts_RemovePart" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/lang/parts/RemovePart.html">RemovePart</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_parts_ReversePart" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/lang/parts/ReversePart.html">ReversePart</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:phootwork_lang_ArrayObject" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/lang/ArrayObject.html">ArrayObject</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_Arrayable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/lang/Arrayable.html">Arrayable</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_Comparable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/lang/Comparable.html">Comparable</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_ComparableComparator" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/lang/ComparableComparator.html">ComparableComparator</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_Comparator" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/lang/Comparator.html">Comparator</a>                    </div>                </li>                            <li data-name="class:phootwork_lang_StringComparator" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/lang/StringComparator.html">StringComparator</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:phootwork_tokenizer" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="phootwork/tokenizer.html">tokenizer</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:phootwork_tokenizer_PhpTokenizer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/tokenizer/PhpTokenizer.html">PhpTokenizer</a>                    </div>                </li>                            <li data-name="class:phootwork_tokenizer_TokenCollection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/tokenizer/TokenCollection.html">TokenCollection</a>                    </div>                </li>                            <li data-name="class:phootwork_tokenizer_TokenVisitorInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/tokenizer/TokenVisitorInterface.html">TokenVisitorInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:phootwork_xml" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="phootwork/xml.html">xml</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:phootwork_xml_exception" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="phootwork/xml/exception.html">exception</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:phootwork_xml_exception_XmlException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="phootwork/xml/exception/XmlException.html">XmlException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:phootwork_xml_XmlParserNoopVisitor" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/xml/XmlParserNoopVisitor.html">XmlParserNoopVisitor</a>                    </div>                </li>                            <li data-name="class:phootwork_xml_XmlParserVisitorInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="phootwork/xml/XmlParserVisitorInterface.html">XmlParserVisitorInterface</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "phootwork.html", "name": "phootwork", "doc": "Namespace phootwork"},{"type": "Namespace", "link": "phootwork/collection.html", "name": "phootwork\\collection", "doc": "Namespace phootwork\\collection"},{"type": "Namespace", "link": "phootwork/file.html", "name": "phootwork\\file", "doc": "Namespace phootwork\\file"},{"type": "Namespace", "link": "phootwork/file/exception.html", "name": "phootwork\\file\\exception", "doc": "Namespace phootwork\\file\\exception"},{"type": "Namespace", "link": "phootwork/json.html", "name": "phootwork\\json", "doc": "Namespace phootwork\\json"},{"type": "Namespace", "link": "phootwork/lang.html", "name": "phootwork\\lang", "doc": "Namespace phootwork\\lang"},{"type": "Namespace", "link": "phootwork/lang/inflector.html", "name": "phootwork\\lang\\inflector", "doc": "Namespace phootwork\\lang\\inflector"},{"type": "Namespace", "link": "phootwork/lang/parts.html", "name": "phootwork\\lang\\parts", "doc": "Namespace phootwork\\lang\\parts"},{"type": "Namespace", "link": "phootwork/tokenizer.html", "name": "phootwork\\tokenizer", "doc": "Namespace phootwork\\tokenizer"},{"type": "Namespace", "link": "phootwork/xml.html", "name": "phootwork\\xml", "doc": "Namespace phootwork\\xml"},{"type": "Namespace", "link": "phootwork/xml/exception.html", "name": "phootwork\\xml\\exception", "doc": "Namespace phootwork\\xml\\exception"},
            {"type": "Interface", "fromName": "phootwork\\collection", "fromLink": "phootwork/collection.html", "link": "phootwork/collection/Collection.html", "name": "phootwork\\collection\\Collection", "doc": "&quot;Collection interface&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\collection\\Collection", "fromLink": "phootwork/collection/Collection.html", "link": "phootwork/collection/Collection.html#method_clear", "name": "phootwork\\collection\\Collection::clear", "doc": "&quot;Resets the collection&quot;"},
                    {"type": "Method", "fromName": "phootwork\\collection\\Collection", "fromLink": "phootwork/collection/Collection.html", "link": "phootwork/collection/Collection.html#method_isEmpty", "name": "phootwork\\collection\\Collection::isEmpty", "doc": "&quot;Checks whether this collection is empty&quot;"},
                    {"type": "Method", "fromName": "phootwork\\collection\\Collection", "fromLink": "phootwork/collection/Collection.html", "link": "phootwork/collection/Collection.html#method_contains", "name": "phootwork\\collection\\Collection::contains", "doc": "&quot;Checks whether the given element is in this collection&quot;"},
                    {"type": "Method", "fromName": "phootwork\\collection\\Collection", "fromLink": "phootwork/collection/Collection.html", "link": "phootwork/collection/Collection.html#method_size", "name": "phootwork\\collection\\Collection::size", "doc": "&quot;Returns the amount of elements in this collection&quot;"},
                    {"type": "Method", "fromName": "phootwork\\collection\\Collection", "fromLink": "phootwork/collection/Collection.html", "link": "phootwork/collection/Collection.html#method_toArray", "name": "phootwork\\collection\\Collection::toArray", "doc": "&quot;Returns the collection as an array&quot;"},
            
            {"type": "Interface", "fromName": "phootwork\\lang", "fromLink": "phootwork/lang.html", "link": "phootwork/lang/Arrayable.html", "name": "phootwork\\lang\\Arrayable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\Arrayable", "fromLink": "phootwork/lang/Arrayable.html", "link": "phootwork/lang/Arrayable.html#method_toArray", "name": "phootwork\\lang\\Arrayable::toArray", "doc": "&quot;Array representation of the object&quot;"},
            
            {"type": "Interface", "fromName": "phootwork\\lang", "fromLink": "phootwork/lang.html", "link": "phootwork/lang/Comparable.html", "name": "phootwork\\lang\\Comparable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\Comparable", "fromLink": "phootwork/lang/Comparable.html", "link": "phootwork/lang/Comparable.html#method_compareTo", "name": "phootwork\\lang\\Comparable::compareTo", "doc": "&quot;Compares to another object&quot;"},
            
            {"type": "Interface", "fromName": "phootwork\\lang", "fromLink": "phootwork/lang.html", "link": "phootwork/lang/Comparator.html", "name": "phootwork\\lang\\Comparator", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\Comparator", "fromLink": "phootwork/lang/Comparator.html", "link": "phootwork/lang/Comparator.html#method_compare", "name": "phootwork\\lang\\Comparator::compare", "doc": "&quot;Compares two objects&quot;"},
            
            {"type": "Interface", "fromName": "phootwork\\lang\\inflector", "fromLink": "phootwork/lang/inflector.html", "link": "phootwork/lang/inflector/InflectorInterface.html", "name": "phootwork\\lang\\inflector\\InflectorInterface", "doc": "&quot;The generic interface to create a plural form of a name.&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\inflector\\InflectorInterface", "fromLink": "phootwork/lang/inflector/InflectorInterface.html", "link": "phootwork/lang/inflector/InflectorInterface.html#method_getPluralForm", "name": "phootwork\\lang\\inflector\\InflectorInterface::getPluralForm", "doc": "&quot;Generate a plural name based on the passed in root.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\inflector\\InflectorInterface", "fromLink": "phootwork/lang/inflector/InflectorInterface.html", "link": "phootwork/lang/inflector/InflectorInterface.html#method_getSingularForm", "name": "phootwork\\lang\\inflector\\InflectorInterface::getSingularForm", "doc": "&quot;Generate a singular name based on the passed in root.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\inflector\\InflectorInterface", "fromLink": "phootwork/lang/inflector/InflectorInterface.html", "link": "phootwork/lang/inflector/InflectorInterface.html#method_isPlural", "name": "phootwork\\lang\\inflector\\InflectorInterface::isPlural", "doc": "&quot;Check if $root word is plural.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\inflector\\InflectorInterface", "fromLink": "phootwork/lang/inflector/InflectorInterface.html", "link": "phootwork/lang/inflector/InflectorInterface.html#method_isSingular", "name": "phootwork\\lang\\inflector\\InflectorInterface::isSingular", "doc": "&quot;Check if $root word is singular.&quot;"},
            
            {"type": "Interface", "fromName": "phootwork\\tokenizer", "fromLink": "phootwork/tokenizer.html", "link": "phootwork/tokenizer/TokenVisitorInterface.html", "name": "phootwork\\tokenizer\\TokenVisitorInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\tokenizer\\TokenVisitorInterface", "fromLink": "phootwork/tokenizer/TokenVisitorInterface.html", "link": "phootwork/tokenizer/TokenVisitorInterface.html#method_visitToken", "name": "phootwork\\tokenizer\\TokenVisitorInterface::visitToken", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "phootwork\\xml", "fromLink": "phootwork/xml.html", "link": "phootwork/xml/XmlParserVisitorInterface.html", "name": "phootwork\\xml\\XmlParserVisitorInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\xml\\XmlParserVisitorInterface", "fromLink": "phootwork/xml/XmlParserVisitorInterface.html", "link": "phootwork/xml/XmlParserVisitorInterface.html#method_visitElementStart", "name": "phootwork\\xml\\XmlParserVisitorInterface::visitElementStart", "doc": "&quot;visits the start of an element&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserVisitorInterface", "fromLink": "phootwork/xml/XmlParserVisitorInterface.html", "link": "phootwork/xml/XmlParserVisitorInterface.html#method_visitElementEnd", "name": "phootwork\\xml\\XmlParserVisitorInterface::visitElementEnd", "doc": "&quot;visits the end of an element&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserVisitorInterface", "fromLink": "phootwork/xml/XmlParserVisitorInterface.html", "link": "phootwork/xml/XmlParserVisitorInterface.html#method_visitCharacterData", "name": "phootwork\\xml\\XmlParserVisitorInterface::visitCharacterData", "doc": "&quot;visits character data&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserVisitorInterface", "fromLink": "phootwork/xml/XmlParserVisitorInterface.html", "link": "phootwork/xml/XmlParserVisitorInterface.html#method_visitProcessingInstruction", "name": "phootwork\\xml\\XmlParserVisitorInterface::visitProcessingInstruction", "doc": "&quot;visits a processing instruction&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserVisitorInterface", "fromLink": "phootwork/xml/XmlParserVisitorInterface.html", "link": "phootwork/xml/XmlParserVisitorInterface.html#method_visitNotationDeclaration", "name": "phootwork\\xml\\XmlParserVisitorInterface::visitNotationDeclaration", "doc": "&quot;visits a notation declaration&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserVisitorInterface", "fromLink": "phootwork/xml/XmlParserVisitorInterface.html", "link": "phootwork/xml/XmlParserVisitorInterface.html#method_visitUnparsedEntityDeclaration", "name": "phootwork\\xml\\XmlParserVisitorInterface::visitUnparsedEntityDeclaration", "doc": "&quot;visits an unparsed entity declaration&quot;"},
            
            
            {"type": "Class", "fromName": "phootwork\\collection", "fromLink": "phootwork/collection.html", "link": "phootwork/collection/Collection.html", "name": "phootwork\\collection\\Collection", "doc": "&quot;Collection interface&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\collection\\Collection", "fromLink": "phootwork/collection/Collection.html", "link": "phootwork/collection/Collection.html#method_clear", "name": "phootwork\\collection\\Collection::clear", "doc": "&quot;Resets the collection&quot;"},
                    {"type": "Method", "fromName": "phootwork\\collection\\Collection", "fromLink": "phootwork/collection/Collection.html", "link": "phootwork/collection/Collection.html#method_isEmpty", "name": "phootwork\\collection\\Collection::isEmpty", "doc": "&quot;Checks whether this collection is empty&quot;"},
                    {"type": "Method", "fromName": "phootwork\\collection\\Collection", "fromLink": "phootwork/collection/Collection.html", "link": "phootwork/collection/Collection.html#method_contains", "name": "phootwork\\collection\\Collection::contains", "doc": "&quot;Checks whether the given element is in this collection&quot;"},
                    {"type": "Method", "fromName": "phootwork\\collection\\Collection", "fromLink": "phootwork/collection/Collection.html", "link": "phootwork/collection/Collection.html#method_size", "name": "phootwork\\collection\\Collection::size", "doc": "&quot;Returns the amount of elements in this collection&quot;"},
                    {"type": "Method", "fromName": "phootwork\\collection\\Collection", "fromLink": "phootwork/collection/Collection.html", "link": "phootwork/collection/Collection.html#method_toArray", "name": "phootwork\\collection\\Collection::toArray", "doc": "&quot;Returns the collection as an array&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\file\\exception", "fromLink": "phootwork/file/exception.html", "link": "phootwork/file/exception/FileException.html", "name": "phootwork\\file\\exception\\FileException", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "phootwork\\file\\exception", "fromLink": "phootwork/file/exception.html", "link": "phootwork/file/exception/FileNotFoundException.html", "name": "phootwork\\file\\exception\\FileNotFoundException", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "phootwork\\json", "fromLink": "phootwork/json.html", "link": "phootwork/json/Json.html", "name": "phootwork\\json\\Json", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\json\\Json", "fromLink": "phootwork/json/Json.html", "link": "phootwork/json/Json.html#method_encode", "name": "phootwork\\json\\Json::encode", "doc": "&quot;Returns the JSON representation of a value&quot;"},
                    {"type": "Method", "fromName": "phootwork\\json\\Json", "fromLink": "phootwork/json/Json.html", "link": "phootwork/json/Json.html#method_decode", "name": "phootwork\\json\\Json::decode", "doc": "&quot;Decodes a JSON string to an array.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\json\\Json", "fromLink": "phootwork/json/Json.html", "link": "phootwork/json/Json.html#method_toMap", "name": "phootwork\\json\\Json::toMap", "doc": "&quot;Returns a map collection of the provided json&quot;"},
                    {"type": "Method", "fromName": "phootwork\\json\\Json", "fromLink": "phootwork/json/Json.html", "link": "phootwork/json/Json.html#method_toList", "name": "phootwork\\json\\Json::toList", "doc": "&quot;Returns a list collection of the provided json&quot;"},
                    {"type": "Method", "fromName": "phootwork\\json\\Json", "fromLink": "phootwork/json/Json.html", "link": "phootwork/json/Json.html#method_toCollection", "name": "phootwork\\json\\Json::toCollection", "doc": "&quot;Returns a collection (list or map) of the provided json&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\lang", "fromLink": "phootwork/lang.html", "link": "phootwork/lang/ArrayObject.html", "name": "phootwork\\lang\\ArrayObject", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method___construct", "name": "phootwork\\lang\\ArrayObject::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_getIterator", "name": "phootwork\\lang\\ArrayObject::getIterator", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_serialize", "name": "phootwork\\lang\\ArrayObject::serialize", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_unserialize", "name": "phootwork\\lang\\ArrayObject::unserialize", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_clear", "name": "phootwork\\lang\\ArrayObject::clear", "doc": "&quot;Resets the array&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_append", "name": "phootwork\\lang\\ArrayObject::append", "doc": "&quot;Append one or more elements onto the end of array&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_prepend", "name": "phootwork\\lang\\ArrayObject::prepend", "doc": "&quot;Prepend one or more elements to the beginning of the array&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_shift", "name": "phootwork\\lang\\ArrayObject::shift", "doc": "&quot;Shift an element off the beginning of array&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_splice", "name": "phootwork\\lang\\ArrayObject::splice", "doc": "&quot;Remove a portion of the array and replace it with something else&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_join", "name": "phootwork\\lang\\ArrayObject::join", "doc": "&quot;Joins the array with a string&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_slice", "name": "phootwork\\lang\\ArrayObject::slice", "doc": "&quot;Extract a slice of the array&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_merge", "name": "phootwork\\lang\\ArrayObject::merge", "doc": "&quot;Merges in other values&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_mergeRecursive", "name": "phootwork\\lang\\ArrayObject::mergeRecursive", "doc": "&quot;Merges in other values, recursively&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_keys", "name": "phootwork\\lang\\ArrayObject::keys", "doc": "&quot;Returns the keys of the array&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_values", "name": "phootwork\\lang\\ArrayObject::values", "doc": "&quot;Returns the values of the array&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_flip", "name": "phootwork\\lang\\ArrayObject::flip", "doc": "&quot;Flips keys and values&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_offsetSet", "name": "phootwork\\lang\\ArrayObject::offsetSet", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_offsetExists", "name": "phootwork\\lang\\ArrayObject::offsetExists", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_offsetUnset", "name": "phootwork\\lang\\ArrayObject::offsetUnset", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\ArrayObject", "fromLink": "phootwork/lang/ArrayObject.html", "link": "phootwork/lang/ArrayObject.html#method_offsetGet", "name": "phootwork\\lang\\ArrayObject::offsetGet", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\lang", "fromLink": "phootwork/lang.html", "link": "phootwork/lang/Arrayable.html", "name": "phootwork\\lang\\Arrayable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\Arrayable", "fromLink": "phootwork/lang/Arrayable.html", "link": "phootwork/lang/Arrayable.html#method_toArray", "name": "phootwork\\lang\\Arrayable::toArray", "doc": "&quot;Array representation of the object&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\lang", "fromLink": "phootwork/lang.html", "link": "phootwork/lang/Comparable.html", "name": "phootwork\\lang\\Comparable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\Comparable", "fromLink": "phootwork/lang/Comparable.html", "link": "phootwork/lang/Comparable.html#method_compareTo", "name": "phootwork\\lang\\Comparable::compareTo", "doc": "&quot;Compares to another object&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\lang", "fromLink": "phootwork/lang.html", "link": "phootwork/lang/ComparableComparator.html", "name": "phootwork\\lang\\ComparableComparator", "doc": "&quot;Class ComparableComparator&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\ComparableComparator", "fromLink": "phootwork/lang/ComparableComparator.html", "link": "phootwork/lang/ComparableComparator.html#method_compare", "name": "phootwork\\lang\\ComparableComparator::compare", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\lang", "fromLink": "phootwork/lang.html", "link": "phootwork/lang/Comparator.html", "name": "phootwork\\lang\\Comparator", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\Comparator", "fromLink": "phootwork/lang/Comparator.html", "link": "phootwork/lang/Comparator.html#method_compare", "name": "phootwork\\lang\\Comparator::compare", "doc": "&quot;Compares two objects&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\lang", "fromLink": "phootwork/lang.html", "link": "phootwork/lang/StringComparator.html", "name": "phootwork\\lang\\StringComparator", "doc": "&quot;String comparison&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\StringComparator", "fromLink": "phootwork/lang/StringComparator.html", "link": "phootwork/lang/StringComparator.html#method_compare", "name": "phootwork\\lang\\StringComparator::compare", "doc": "&quot;Compares two objects&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\lang\\inflector", "fromLink": "phootwork/lang/inflector.html", "link": "phootwork/lang/inflector/InflectorInterface.html", "name": "phootwork\\lang\\inflector\\InflectorInterface", "doc": "&quot;The generic interface to create a plural form of a name.&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\inflector\\InflectorInterface", "fromLink": "phootwork/lang/inflector/InflectorInterface.html", "link": "phootwork/lang/inflector/InflectorInterface.html#method_getPluralForm", "name": "phootwork\\lang\\inflector\\InflectorInterface::getPluralForm", "doc": "&quot;Generate a plural name based on the passed in root.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\inflector\\InflectorInterface", "fromLink": "phootwork/lang/inflector/InflectorInterface.html", "link": "phootwork/lang/inflector/InflectorInterface.html#method_getSingularForm", "name": "phootwork\\lang\\inflector\\InflectorInterface::getSingularForm", "doc": "&quot;Generate a singular name based on the passed in root.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\inflector\\InflectorInterface", "fromLink": "phootwork/lang/inflector/InflectorInterface.html", "link": "phootwork/lang/inflector/InflectorInterface.html#method_isPlural", "name": "phootwork\\lang\\inflector\\InflectorInterface::isPlural", "doc": "&quot;Check if $root word is plural.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\inflector\\InflectorInterface", "fromLink": "phootwork/lang/inflector/InflectorInterface.html", "link": "phootwork/lang/inflector/InflectorInterface.html#method_isSingular", "name": "phootwork\\lang\\inflector\\InflectorInterface::isSingular", "doc": "&quot;Check if $root word is singular.&quot;"},
            
            {"type": "Trait", "fromName": "phootwork\\lang\\parts", "fromLink": "phootwork/lang/parts.html", "link": "phootwork/lang/parts/AddPart.html", "name": "phootwork\\lang\\parts\\AddPart", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\parts\\AddPart", "fromLink": "phootwork/lang/parts/AddPart.html", "link": "phootwork/lang/parts/AddPart.html#method_add", "name": "phootwork\\lang\\parts\\AddPart::add", "doc": "&quot;Adds one or more elements to that array&quot;"},
            
            {"type": "Trait", "fromName": "phootwork\\lang\\parts", "fromLink": "phootwork/lang/parts.html", "link": "phootwork/lang/parts/ArrayConversionsPart.html", "name": "phootwork\\lang\\parts\\ArrayConversionsPart", "doc": "&quot;Text methods for array\/ArrayObject conversions&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\parts\\ArrayConversionsPart", "fromLink": "phootwork/lang/parts/ArrayConversionsPart.html", "link": "phootwork/lang/parts/ArrayConversionsPart.html#method_split", "name": "phootwork\\lang\\parts\\ArrayConversionsPart::split", "doc": "&quot;Splits the string by string&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\parts\\ArrayConversionsPart", "fromLink": "phootwork/lang/parts/ArrayConversionsPart.html", "link": "phootwork/lang/parts/ArrayConversionsPart.html#method_join", "name": "phootwork\\lang\\parts\\ArrayConversionsPart::join", "doc": "&quot;Join array elements with a string&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\parts\\ArrayConversionsPart", "fromLink": "phootwork/lang/parts/ArrayConversionsPart.html", "link": "phootwork/lang/parts/ArrayConversionsPart.html#method_chunk", "name": "phootwork\\lang\\parts\\ArrayConversionsPart::chunk", "doc": "&quot;Convert the string to an array&quot;"},
            
            {"type": "Trait", "fromName": "phootwork\\lang\\parts", "fromLink": "phootwork/lang/parts.html", "link": "phootwork/lang/parts/CheckerPart.html", "name": "phootwork\\lang\\parts\\CheckerPart", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\parts\\CheckerPart", "fromLink": "phootwork/lang/parts/CheckerPart.html", "link": "phootwork/lang/parts/CheckerPart.html#method_isEmpty", "name": "phootwork\\lang\\parts\\CheckerPart::isEmpty", "doc": "&quot;Checks if the string is empty&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\parts\\CheckerPart", "fromLink": "phootwork/lang/parts/CheckerPart.html", "link": "phootwork/lang/parts/CheckerPart.html#method_isAlphanumeric", "name": "phootwork\\lang\\parts\\CheckerPart::isAlphanumeric", "doc": "&quot;Check if the string contains only alphanumeric characters.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\parts\\CheckerPart", "fromLink": "phootwork/lang/parts/CheckerPart.html", "link": "phootwork/lang/parts/CheckerPart.html#method_isAlphabetic", "name": "phootwork\\lang\\parts\\CheckerPart::isAlphabetic", "doc": "&quot;Check if the string contains only alphanumeric characters.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\parts\\CheckerPart", "fromLink": "phootwork/lang/parts/CheckerPart.html", "link": "phootwork/lang/parts/CheckerPart.html#method_isNumeric", "name": "phootwork\\lang\\parts\\CheckerPart::isNumeric", "doc": "&quot;Check if the string contains only numeric characters.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\parts\\CheckerPart", "fromLink": "phootwork/lang/parts/CheckerPart.html", "link": "phootwork/lang/parts/CheckerPart.html#method_isPunctuation", "name": "phootwork\\lang\\parts\\CheckerPart::isPunctuation", "doc": "&quot;Check if the string contains only characters which are not whitespace or an alphanumeric.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\parts\\CheckerPart", "fromLink": "phootwork/lang/parts/CheckerPart.html", "link": "phootwork/lang/parts/CheckerPart.html#method_isSpace", "name": "phootwork\\lang\\parts\\CheckerPart::isSpace", "doc": "&quot;Check if the string contains only space characters.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\parts\\CheckerPart", "fromLink": "phootwork/lang/parts/CheckerPart.html", "link": "phootwork/lang/parts/CheckerPart.html#method_isLowerCase", "name": "phootwork\\lang\\parts\\CheckerPart::isLowerCase", "doc": "&quot;Check if the string contains only lower case characters.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\parts\\CheckerPart", "fromLink": "phootwork/lang/parts/CheckerPart.html", "link": "phootwork/lang/parts/CheckerPart.html#method_isUpperCase", "name": "phootwork\\lang\\parts\\CheckerPart::isUpperCase", "doc": "&quot;Check if the string contains only upper case characters.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\parts\\CheckerPart", "fromLink": "phootwork/lang/parts/CheckerPart.html", "link": "phootwork/lang/parts/CheckerPart.html#method_isSingular", "name": "phootwork\\lang\\parts\\CheckerPart::isSingular", "doc": "&quot;Check if a string is singular form.&quot;"},
                    {"type": "Method", "fromName": "phootwork\\lang\\parts\\CheckerPart", "fromLink": "phootwork/lang/parts/CheckerPart.html", "link": "phootwork/lang/parts/CheckerPart.html#method_isPlural", "name": "phootwork\\lang\\parts\\CheckerPart::isPlural", "doc": "&quot;Check if a string is plural form.&quot;"},
            
            {"type": "Trait", "fromName": "phootwork\\lang\\parts", "fromLink": "phootwork/lang/parts.html", "link": "phootwork/lang/parts/EachPart.html", "name": "phootwork\\lang\\parts\\EachPart", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\parts\\EachPart", "fromLink": "phootwork/lang/parts/EachPart.html", "link": "phootwork/lang/parts/EachPart.html#method_each", "name": "phootwork\\lang\\parts\\EachPart::each", "doc": "&quot;Iterates the array and calls the callback function with the current item as parameter&quot;"},
            
            {"type": "Trait", "fromName": "phootwork\\lang\\parts", "fromLink": "phootwork/lang/parts.html", "link": "phootwork/lang/parts/InternalPart.html", "name": "phootwork\\lang\\parts\\InternalPart", "doc": "&quot;Internal Text methods&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\parts\\InternalPart", "fromLink": "phootwork/lang/parts/InternalPart.html", "link": "phootwork/lang/parts/InternalPart.html#method_length", "name": "phootwork\\lang\\parts\\InternalPart::length", "doc": "&quot;&quot;"},
            
            {"type": "Trait", "fromName": "phootwork\\lang\\parts", "fromLink": "phootwork/lang/parts.html", "link": "phootwork/lang/parts/PopPart.html", "name": "phootwork\\lang\\parts\\PopPart", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\parts\\PopPart", "fromLink": "phootwork/lang/parts/PopPart.html", "link": "phootwork/lang/parts/PopPart.html#method_pop", "name": "phootwork\\lang\\parts\\PopPart::pop", "doc": "&quot;Pop the element off the end of array&quot;"},
            
            {"type": "Trait", "fromName": "phootwork\\lang\\parts", "fromLink": "phootwork/lang/parts.html", "link": "phootwork/lang/parts/ReducePart.html", "name": "phootwork\\lang\\parts\\ReducePart", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\parts\\ReducePart", "fromLink": "phootwork/lang/parts/ReducePart.html", "link": "phootwork/lang/parts/ReducePart.html#method_reduce", "name": "phootwork\\lang\\parts\\ReducePart::reduce", "doc": "&quot;Iterative reduction of this array or collection with the help of a callback function. The callback\nfunction takes two parameters, the first is the carry, the second the current item, with this\nsignature: mixed callback(mixed $carry, mixed $item)&quot;"},
            
            {"type": "Trait", "fromName": "phootwork\\lang\\parts", "fromLink": "phootwork/lang/parts.html", "link": "phootwork/lang/parts/RemovePart.html", "name": "phootwork\\lang\\parts\\RemovePart", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\parts\\RemovePart", "fromLink": "phootwork/lang/parts/RemovePart.html", "link": "phootwork/lang/parts/RemovePart.html#method_remove", "name": "phootwork\\lang\\parts\\RemovePart::remove", "doc": "&quot;Removes one or more elements from the array&quot;"},
            
            {"type": "Trait", "fromName": "phootwork\\lang\\parts", "fromLink": "phootwork/lang/parts.html", "link": "phootwork/lang/parts/ReversePart.html", "name": "phootwork\\lang\\parts\\ReversePart", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\lang\\parts\\ReversePart", "fromLink": "phootwork/lang/parts/ReversePart.html", "link": "phootwork/lang/parts/ReversePart.html#method_reverse", "name": "phootwork\\lang\\parts\\ReversePart::reverse", "doc": "&quot;Reverses the order of all elements&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\tokenizer", "fromLink": "phootwork/tokenizer.html", "link": "phootwork/tokenizer/PhpTokenizer.html", "name": "phootwork\\tokenizer\\PhpTokenizer", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\tokenizer\\PhpTokenizer", "fromLink": "phootwork/tokenizer/PhpTokenizer.html", "link": "phootwork/tokenizer/PhpTokenizer.html#method_tokenize", "name": "phootwork\\tokenizer\\PhpTokenizer::tokenize", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\tokenizer", "fromLink": "phootwork/tokenizer.html", "link": "phootwork/tokenizer/TokenCollection.html", "name": "phootwork\\tokenizer\\TokenCollection", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\tokenizer\\TokenCollection", "fromLink": "phootwork/tokenizer/TokenCollection.html", "link": "phootwork/tokenizer/TokenCollection.html#method_get", "name": "phootwork\\tokenizer\\TokenCollection::get", "doc": "&quot;Retrieves a token at the given index&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\tokenizer", "fromLink": "phootwork/tokenizer.html", "link": "phootwork/tokenizer/TokenVisitorInterface.html", "name": "phootwork\\tokenizer\\TokenVisitorInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\tokenizer\\TokenVisitorInterface", "fromLink": "phootwork/tokenizer/TokenVisitorInterface.html", "link": "phootwork/tokenizer/TokenVisitorInterface.html#method_visitToken", "name": "phootwork\\tokenizer\\TokenVisitorInterface::visitToken", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\xml", "fromLink": "phootwork/xml.html", "link": "phootwork/xml/XmlParserNoopVisitor.html", "name": "phootwork\\xml\\XmlParserNoopVisitor", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\xml\\XmlParserNoopVisitor", "fromLink": "phootwork/xml/XmlParserNoopVisitor.html", "link": "phootwork/xml/XmlParserNoopVisitor.html#method_visitElementEnd", "name": "phootwork\\xml\\XmlParserNoopVisitor::visitElementEnd", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserNoopVisitor", "fromLink": "phootwork/xml/XmlParserNoopVisitor.html", "link": "phootwork/xml/XmlParserNoopVisitor.html#method_visitProcessingInstruction", "name": "phootwork\\xml\\XmlParserNoopVisitor::visitProcessingInstruction", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserNoopVisitor", "fromLink": "phootwork/xml/XmlParserNoopVisitor.html", "link": "phootwork/xml/XmlParserNoopVisitor.html#method_visitNotationDeclaration", "name": "phootwork\\xml\\XmlParserNoopVisitor::visitNotationDeclaration", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserNoopVisitor", "fromLink": "phootwork/xml/XmlParserNoopVisitor.html", "link": "phootwork/xml/XmlParserNoopVisitor.html#method_visitUnparsedEntityDeclaration", "name": "phootwork\\xml\\XmlParserNoopVisitor::visitUnparsedEntityDeclaration", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserNoopVisitor", "fromLink": "phootwork/xml/XmlParserNoopVisitor.html", "link": "phootwork/xml/XmlParserNoopVisitor.html#method_visitElementStart", "name": "phootwork\\xml\\XmlParserNoopVisitor::visitElementStart", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserNoopVisitor", "fromLink": "phootwork/xml/XmlParserNoopVisitor.html", "link": "phootwork/xml/XmlParserNoopVisitor.html#method_visitCharacterData", "name": "phootwork\\xml\\XmlParserNoopVisitor::visitCharacterData", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\xml", "fromLink": "phootwork/xml.html", "link": "phootwork/xml/XmlParserVisitorInterface.html", "name": "phootwork\\xml\\XmlParserVisitorInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "phootwork\\xml\\XmlParserVisitorInterface", "fromLink": "phootwork/xml/XmlParserVisitorInterface.html", "link": "phootwork/xml/XmlParserVisitorInterface.html#method_visitElementStart", "name": "phootwork\\xml\\XmlParserVisitorInterface::visitElementStart", "doc": "&quot;visits the start of an element&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserVisitorInterface", "fromLink": "phootwork/xml/XmlParserVisitorInterface.html", "link": "phootwork/xml/XmlParserVisitorInterface.html#method_visitElementEnd", "name": "phootwork\\xml\\XmlParserVisitorInterface::visitElementEnd", "doc": "&quot;visits the end of an element&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserVisitorInterface", "fromLink": "phootwork/xml/XmlParserVisitorInterface.html", "link": "phootwork/xml/XmlParserVisitorInterface.html#method_visitCharacterData", "name": "phootwork\\xml\\XmlParserVisitorInterface::visitCharacterData", "doc": "&quot;visits character data&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserVisitorInterface", "fromLink": "phootwork/xml/XmlParserVisitorInterface.html", "link": "phootwork/xml/XmlParserVisitorInterface.html#method_visitProcessingInstruction", "name": "phootwork\\xml\\XmlParserVisitorInterface::visitProcessingInstruction", "doc": "&quot;visits a processing instruction&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserVisitorInterface", "fromLink": "phootwork/xml/XmlParserVisitorInterface.html", "link": "phootwork/xml/XmlParserVisitorInterface.html#method_visitNotationDeclaration", "name": "phootwork\\xml\\XmlParserVisitorInterface::visitNotationDeclaration", "doc": "&quot;visits a notation declaration&quot;"},
                    {"type": "Method", "fromName": "phootwork\\xml\\XmlParserVisitorInterface", "fromLink": "phootwork/xml/XmlParserVisitorInterface.html", "link": "phootwork/xml/XmlParserVisitorInterface.html#method_visitUnparsedEntityDeclaration", "name": "phootwork\\xml\\XmlParserVisitorInterface::visitUnparsedEntityDeclaration", "doc": "&quot;visits an unparsed entity declaration&quot;"},
            
            {"type": "Class", "fromName": "phootwork\\xml\\exception", "fromLink": "phootwork/xml/exception.html", "link": "phootwork/xml/exception/XmlException.html", "name": "phootwork\\xml\\exception\\XmlException", "doc": "&quot;&quot;"},
                    
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


