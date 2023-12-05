namespace $ {
	export class $hyoo_crowds_dict extends $hyoo_crowds_node {
		
		static tag = $hyoo_crowds_gist_tag[ $hyoo_crowds_gist_tag.keys ] as keyof typeof $hyoo_crowds_gist_tag
		
		static of<
			Schema extends Record< string, typeof $hyoo_crowds_node >
		>( schema: Schema ) {
			
			const Entity = class Entity extends $hyoo_crowds_dict {}
		
			for( const field in schema ) {
				Object.assign( Entity.prototype, { [ field ]: function( this: $hyoo_crowds_dict ) {
					return this.dive( field, schema[ field ] )
				} } )
				$mol_mem( Entity.prototype, field )
			}
			
			return Entity as Pick< typeof $hyoo_crowds_dict, keyof typeof $hyoo_crowds_dict > & {
				new(): $hyoo_crowds_dict & {
					[ Key in keyof Schema ]: ()=> InstanceType< Schema[ Key ] >
				}
			}
			
		}
		
		@ $mol_mem
		keys(): readonly $hyoo_crowds_vary_type[] {
			return this.cast( $hyoo_crowds_list ).items()
		}
		
		has(
			key: $hyoo_crowds_vary_type,
			next?: false,
		) {
			return this.cast( $hyoo_crowds_list ).has( key, next, 'head' )
		}
		
		dive< Node extends typeof $hyoo_crowds_node >( key: $hyoo_crowds_vary_type, Node: Node ) {
			this.cast( $hyoo_crowds_list ).has( key, true, Node.tag )
			const unit = this.cast( $hyoo_crowds_list ).find( key )!
			return this.area().Node( Node ).Item( unit.self() )
		}
		
		;[ $mol_dev_format_head ]() {
			const nodes = this.nodes(null)
			return $mol_dev_format_span( {} ,
				$mol_dev_format_native( this ) ,
				' ',
				this.slug(),
				' ',
				$mol_dev_format_auto( this.keys().map( ( key, index )=> new Pair( key, nodes[ index ] ) ) ),
			)
		}
		
	}
	
	class Pair {
		constructor( readonly key: any, readonly val: any ) {
		}
		;[ $mol_dev_format_head ]() {
			return $mol_dev_format_tr( {} ,
				$mol_dev_format_td( {}, $mol_dev_format_auto(this.key) ),
				$mol_dev_format_td( {},': '),
				$mol_dev_format_td( {}, $mol_dev_format_auto(this.val) ),
			)
		}
	}
	
}